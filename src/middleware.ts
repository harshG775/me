// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Set your Basic Auth credentials
const basicAuthUser = process.env.BASIC_AUTH_USER || "admin1234";
const basicAuthPass = process.env.BASIC_AUTH_PASS || "admin1234";

export function middleware(request: NextRequest) {
    const basicAuth = request.headers.get("authorization");

    if (request.nextUrl.pathname.startsWith("/admin")) {
        if (!basicAuth) {
            return new NextResponse("Authentication Required", {
                status: 401,
                headers: {
                    "WWW-Authenticate": 'Basic realm="Secure Area"',
                },
            });
        }

        const authValue = basicAuth.split(" ")[1];
        const [user, pass] = atob(authValue).split(":");

        if (user !== basicAuthUser || pass !== basicAuthPass) {
            return new NextResponse("Access Denied", {
                status: 401,
                headers: {
                    "WWW-Authenticate": 'Basic realm="Secure Area"',
                },
            });
        }
    }

    return NextResponse.next();
}
