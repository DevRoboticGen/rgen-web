import { NextResponse } from "next/server";
import { base } from "@/lib/airtable";

export async function GET() {
  try {
    const tableName = "Logos";
    const records = await base(tableName)
      .select({
        fields: ["Name", "Logo Image", "Status"],
      })
      .all();

    const activeRecords = records.filter(
      (record) => record.fields["Status"] === "ACTIVE",
    );
    const formattedRecords = activeRecords.map((record) => ({
      id: record.id,
      name: record.fields["Name"],
      logoImage: record.fields["Logo Image"],
    }));

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
