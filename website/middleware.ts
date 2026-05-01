import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/settings`);
    const data = await res.json();

    if (data?.data?.maintenanceMode) {
      // Already maintenance page pe hai — loop mat karo
      if (req.nextUrl.pathname === '/maintenance') {
        return NextResponse.next();
      }
      return NextResponse.redirect(new URL('/maintenance', req.url));
    }

    // Maintenance off — agar maintenance page pe hai to home pe bhejo
    if (req.nextUrl.pathname === '/maintenance') {
      return NextResponse.redirect(new URL('/', req.url));
    }

    return NextResponse.next();
  } catch {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};