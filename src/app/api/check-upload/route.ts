import { NextResponse } from 'next/server';
import { Pinecone } from '@pinecone-database/pinecone';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const fileName = searchParams.get('fileName');

  if (!fileName) {
    return NextResponse.json({ error: 'No file name provided' }, { status: 400 });
  }

  try {
    const pc = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY as string
    });
    const index = pc.Index(process.env.PINECONE_INDEX_NAME as string);

    const queryResponse = await index.fetch([fileName]);

    if (queryResponse.records && queryResponse.records[fileName]) {
      return NextResponse.json({ 
        exists: true, 
        vector: queryResponse.records[fileName].values 
      });
    } else {
      return NextResponse.json({ exists: false });
    }
  } catch (error) {
    console.error('Error checking Pinecone:', error);
    return NextResponse.json({ error: 'Error checking Pinecone' }, { status: 500 });
  }
}
