import { NextResponse } from 'next/server';
import { base } from '@/lib/airtable';


export async function GET() {
  try {
    const tableName = 'Members'; 
    const records = await base(tableName)
      .select({
        fields: ['Name Website', 'Title Website' , 'Teams Website' , 'LinkedIn Url' , 'Headshot Website'], 
        view: 'Website',
      })
      .all();

    const formattedRecords = records.map((record) => ({
      id: record.id,
      name: record.fields['Name Website'],
      title: record.fields['Title Website'],
      team: record.fields['Teams Website'],
      linkedIn: record.fields['LinkedIn Url'],
      image: Array.isArray(record.fields['Headshot Website']) && record.fields['Headshot Website'][0] ? record.fields['Headshot Website'][0].url : '/avatar.png',
      
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
