import { loginWithGoogle } from "@/services/LoginWithGoogle";
import { AuthOptions, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import prisma from "@/utils/prisma";

import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user?: {
      id: number;
      email: string;
      password: string;
      name: string;
      role: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
  }
}

export const authOption: AuthOptions = {
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user) {
          throw new Error("Email tidak ditemukan!");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password as string);

        if (!isPasswordValid) {
          throw new Error("Password salah!");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.username,
          role: user.role,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user, trigger, session }: any) {
      if (user) {
        token.user = {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      }
      if (account?.provider === "credentials") {
        token.name = user.username;
        token.email = user.email;
        token.user.role = user.role;
      }

      if (account?.provider === "google") {
        const data = {
          username: user.name || user.email.split("@")[0],
          email: user.email,
        };

        const result = await loginWithGoogle(data);
        if (result.status) {
          token.user = {
            id: result.data.id,
            email: result.data.email,
            name: result.data.username,
            role: result.data.role,
          };
        }
      }

      if (trigger === "update" && session) {
        token.user = {
          ...token.user,
          email: session.user.email,
          name: session.user.name,
        };
      }
      return token;
    },
    session: async ({ session, token }: any) => {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    newUser: "/register",
    error: "/login",
  },
};
