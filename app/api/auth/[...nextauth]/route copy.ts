import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import client from "@/app/utils/db";
import bcryptjs from "bcryptjs";

import { NextAuthOptions, User as IUser } from "next-auth";

interface ICustomDataOfUser extends IUser {
  role: string | null | undefined;
  active: boolean;
  is_admin: boolean;
  provider: string;
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(client),
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 10 * 24 * 60 * 60,
    updateAge: 2 * 24 * 60 * 60,
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      profile(profile) {
        const AdminEmail = "techiesakar@gmail.com";
        let isAdmin = false;
        if (profile.email === AdminEmail) {
          isAdmin = true;
        }
        console.log(profile);
        return {
          id: profile.id,
          name: profile.name || "Unknown",
          email: profile.email || "Unknown",
          image: profile.avatar_url || "Unknown",
          role: isAdmin ? "ADMIN" : "GUEST",
          provider: "github",
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      profile(profile) {
        const AdminEmail = "techiesakar@gmail.com";
        let isAdmin = false;
        if (profile.email === AdminEmail) {
          isAdmin = true;
        }
        return {
          id: profile.sub,
          name: profile.name || "Unknown",
          email: profile.email,
          image: profile.image,
          role: isAdmin ? "ADMIN" : "GUEST",
          provider: "google",
        };
      },
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const formEmail = credentials?.email as string;
        const formPassword = credentials?.password as string;

        const isUserExist = await client.user.findUnique({
          where: {
            email: formEmail,
          },
        });

        if (!isUserExist) {
          return null;
        }

        if (isUserExist.password === null) {
          return null;
        }

        const isValidPassword = await bcryptjs.compare(
          formPassword,
          isUserExist?.password
        );
        if (!isValidPassword) {
          return null;
        }
        return {
          id: isUserExist?.id,
          name: isUserExist?.name || "anonymous",
          email: isUserExist?.email,
          role: isUserExist?.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account) {
        token.accessToken = account?.access_token;
      }
      let customData;
      if (user) {
        token.id = user?.id;
        const userNewData = user as ICustomDataOfUser;

        if (!userNewData?.provider && user.email != null) {
          const existUser = await client.user.findUnique({
            where: {
              email: user?.email,
            },
          });
          customData = {
            id: existUser?.id,
            name: existUser?.name,
            email: existUser?.email,
            image: existUser?.image,
            role: existUser?.role,
          };
        } else {
          customData = {
            id: userNewData?.id,
            name: userNewData?.name,
            email: userNewData?.email,
            image: userNewData?.image,
            role: userNewData?.role || "GUEST",
          };
        }
      }
      return { ...token, ...customData };
    },
    async session({ session, token }) {
      if (
        typeof token.role === "string" ||
        token.role === null ||
        token.role === undefined
      ) {
        session.user = {
          ...session.user,
          role: token.role,
        };
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
