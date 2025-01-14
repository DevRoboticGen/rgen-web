import { NextResponse } from 'next/server';
import { base } from '@/lib/airtable';


export async function GET() {
  try {
    const tableName = 'News'; 
    const records = await base(tableName)
      .select({
        fields: ['Title', 'Status' , 'Date' , 'Cover', 'Details' , 'Read More'], 
      })
      .all();

    const activeRecords = records.filter(record => record.fields['Status'] === 'ACTIVE');
    const formattedRecords = activeRecords.map((record) => ({
      id: record.id,
      title: record.fields['Title'],
      date: record.fields['Date'],
      image: Array.isArray(record.fields['Cover']) && record.fields['Cover'][0] ? record.fields['Cover'][0].url : '',
      description: record.fields['Details'],
      readMore: record.fields['Read More'],
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
