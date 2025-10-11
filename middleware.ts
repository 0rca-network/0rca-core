import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const host = request.headers.get("host") || ""

  if (host.startsWith("docs.")) {
    if (!url.pathname.startsWith("/docs")) {
      url.pathname = `/docs${url.pathname === "/" ? "" : url.pathname}`
      return NextResponse.rewrite(url)
    }
  }

  if (host.startsWith("pod.")) {
    if (!url.pathname.startsWith("/pod")) {
      url.pathname = `/pod${url.pathname === "/" ? "" : url.pathname}`
      return NextResponse.rewrite(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next).*)"],
}
