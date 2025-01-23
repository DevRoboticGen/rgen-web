import { NextResponse } from "next/server";
import { base } from "@/lib/airtable";

interface LogoFields {
  "Logo Image"?: { url: string }[];
}

interface AdvisoryFields {
  Name: string;
  Title: string;
  Description: string;
  Logos?: string[];
}

export async function GET() {
  try {
    const advisoryTable = "Advisory Panel";
    const logosTable = "Logos";

    const advisorRecords = await base(advisoryTable)
      .select({
        fields: ["Name", "Title", "Description", "Logos"],
        view: "Website",
      })
      .all();

    const logoRecordIds = advisorRecords.flatMap(
      (record) => (record.fields as unknown as AdvisoryFields)["Logos"] || [],
    );

    const logoRecords = await base(logosTable)
      .select({
        filterByFormula: `OR(${logoRecordIds.map((id) => `RECORD_ID()='${id}'`).join(",")})`,
      })
      .all();

    const logoMap: { [key: string]: string | null } = logoRecords.reduce(
      (acc, record) => {
        const fields = record.fields as LogoFields;
        acc[record.id] = fields["Logo Image"]?.[0]?.url || null;
        return acc;
      },
      {} as { [key: string]: string | null },
    );

    const formattedRecords = advisorRecords.map((record) => {
      const fields = record.fields as unknown as AdvisoryFields;
      return {
        id: record.id,
        name: fields.Name,
        title: fields.Title,
        description: fields.Description,
        logo: (fields.Logos || []).map((logoId) => logoMap[logoId] || null),
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
