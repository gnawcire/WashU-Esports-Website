import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export default async function GET(request: Request){
    const events = await sql`SELECT * FROM events;`;
    return NextResponse.json({ events }, { status: 200 });
}
