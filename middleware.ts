import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Access control or rewrite routes if needed in the future
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/profile/:path*",
    "/orders/:path*",
    "/checkout/:path*",
  ],
};
