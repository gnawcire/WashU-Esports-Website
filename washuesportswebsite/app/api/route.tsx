import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import type { NextApiRequest, NextApiResponse } from 'next'
 
export async function GET() {
  
  
  const events = await sql`SELECT * FROM events;`;
  return NextResponse.json({ events });
}