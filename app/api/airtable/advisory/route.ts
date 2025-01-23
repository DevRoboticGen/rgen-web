import { NextResponse } from "next/server";
import { base } from "@/lib/airtable";

// Define types for Airtable fields
interface LogoFields {
  "Logo Image"?: { url: string }[]; // Adjust to match your actual field name in the Logos table
}

interface AdvisoryFields {
  Name: string;
  Title: string;
  Description: string;
  Logos?: string[]; // Array of record IDs from the Logos table
}

export async function GET() {
  try {
    const advisoryTable = "Advisory Panel";
    const logosTable = "Logos";

    // Step 1: Fetch all advisors
    const advisorRecords = await base(advisoryTable)
      .select({
        fields: ["Name", "Title", "Description", "Logos"], // Include Logos (linked field)
        view: "Website",
      })
      .all();

    // Step 2: Collect all linked logo record IDs
    const logoRecordIds = advisorRecords.flatMap(
      (record) => (record.fields as unknown as AdvisoryFields)["Logos"] || [],
    ); // Flatten all logo IDs into one array

    // Step 3: Fetch logo records from the Logos table
    const logoRecords = await base(logosTable)
      .select({
        filterByFormula: `OR(${logoRecordIds.map((id) => `RECORD_ID()='${id}'`).join(",")})`,
      })
      .all();

    // Step 4: Map logo record IDs to their corresponding logo URLs
    const logoMap: { [key: string]: string | null } = logoRecords.reduce(
      (acc, record) => {
        const fields = record.fields as LogoFields;
        acc[record.id] = fields["Logo Image"]?.[0]?.url || null; // Adjust "Logo Image" to your actual field name
        return acc;
      },
      {} as { [key: string]: string | null },
    );

    // Step 5: Format the advisors with their corresponding logo URLs
    const formattedRecords = advisorRecords.map((record) => {
      const fields = record.fields as unknown as AdvisoryFields;
      return {
        id: record.id,
        name: fields.Name,
        title: fields.Title,
        description: fields.Description,
        logo: (fields.Logos || []).map((logoId) => logoMap[logoId] || null), // Map logo IDs to URLs
      };
    });

    return NextResponse.json(formattedRecords);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching Airtable data:", error.message);
    } else {
      console.error("Error fetching Airtable data:", error);
    }
    return NextResponse.json(
      {
        error: (error as Error).message || "Failed to fetch data from Airtable",
      },
      { status: 500 },
    );
  }
}
