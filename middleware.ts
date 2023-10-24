/* import { User } from "@/models/user.model";
import { getStorage } from "@/utils/storage"; */
import { NextRequest, NextResponse } from "next/server";

/* const user: User | null = getStorage("user");
console.log(user); */

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.endsWith("/posts")) {
    return NextResponse.redirect(new URL("/posts/lists", request.url));
  }

  /* if (request.nextUrl.pathname.startsWith("/posts")) {
    if (user) {
      if (!user.authenticated) {
        return NextResponse.redirect(new URL("/login", request.url));
      }
    }
  } */
}
