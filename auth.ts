import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";
import { NextResponse } from "next/server";

export const config = {
  theme: {
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  },
  providers: [GitHub, Google],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (
        pathname.startsWith("/add") &&
        auth?.user?.email !== "techiesakar@gmail.com"
      ) {
        return NextResponse.redirect(new URL("/", request.url));
      }
      if (pathname === "/add") return !!auth;
      return true;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
