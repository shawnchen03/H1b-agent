import { NextResponse } from 'next/server';

async function query(data: { question: string }) {
  const response = await fetch(
    "http://localhost:3000/api/v1/prediction/782760ff-0fd1-43c2-ac72-6156087ac0df",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
  );
  const result = await response.json();
  return result;
}

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    const response = await query({ question: message });
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Error processing your request' }, { status: 500 });
  }
}
