import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.redirect(new URL('/sitemap.xml', 'https://imsmanutencao.com.br'), 301);
}
