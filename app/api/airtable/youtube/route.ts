import { NextResponse } from 'next/server';
import { base } from '@/lib/airtable';


export async function GET() {
  try {
    const tableName = 'YT Videos'; 
    const records = await base(tableName)
      .select({
        fields: ['Video Id', 'Status' , 'Url'], 
      })
      .all();

    const activeRecords = records.filter(record => record.fields['Status'] === 'ACTIVE');
    const formattedRecords = activeRecords.map((record) => ({
      id: record.id,
      thumbnail: `https://img.youtube.com/vi/${record.fields['Video Id']}/maxresdefault.jpg`, 
      url: record.fields['Video Id'], 
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
