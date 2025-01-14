import { NextResponse } from 'next/server';
import { base } from '@/lib/airtable';


export async function GET() {
  try {
    const tableName = 'Careers'; 
    const records = await base(tableName)
      .select({
        fields: ['Display Name', 'Status' , 'Notion Link' , 'Duration', 'Type', 'Mode', 'Apply' , 'Teams Website' , 'Cover Website'], 
      })
      .all();

    const activeRecords = records.filter(record => record.fields['Status'] === 'ACTIVE');
    const formattedRecords = activeRecords.map((record) => ({
      name: record.fields['Display Name'],
      team: record.fields['Teams Website'],
      duration: record.fields['Duration'],
      type: record.fields['Type'],
      mode: record.fields['Mode'],
      notion: record.fields['Notion Link'],
      apply: record.fields['Apply'],
      image: Array.isArray(record.fields['Cover Website']) && record.fields['Cover Website'][0] ? record.fields['Cover Website'][0].url : '',
    }));

    return NextResponse.json(formattedRecords);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error fetching Airtable data:', error.message);
    } else {
      console.error('Error fetching Airtable data:', error);
    }
    return NextResponse.json(
      { error: (error as Error).message || 'Failed to fetch data from Airtable' },
      { status: 500 }
    );
  }
}
