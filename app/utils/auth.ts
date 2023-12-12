import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials";

import { PrismaAdapter } from "@auth/prisma-adapter";
import client from "./db";

const getUser = async (email: string) => {
  try {
    const user = await client.user.findUnique({
      where: {
        email: email,
      },
    });

    return user;
  } catch (error) {
    throw new Error("Failed to fetch user.");
  }
};

export const authOptions = {
  adapter: PrismaAdapter(client),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
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

    // For Custom Login
  ],
} satisfies NextAuthOptions;