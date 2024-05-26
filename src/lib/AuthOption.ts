import User from "@/models/userModel";
import { loginWithGoogle } from "@/services/LoginWithGoogle";
import connect from "@/utils/mongodb";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";

export const authOption: NextAuthOptions = {
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
        const { email } = credentials as {
          email: string;
          password: string;
        };
        await connect();
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("Email/Password salah!");
        }
        return user.toObject();
      },
    }),
    // google providers
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user, trigger, session }: any) {
      if (user) {
        token.user = {
          _id: user._id,
          email: user.email,
          name: user.name,
          isAdmin: user.isAdmin,
        };
      }
      if (account?.provider === "credentials") {
        token.username = user.username;
        token.email = user.email;
        token.role = user.role;
      }
      if (account?.provider === "google") {
        const data = {
          username: user.username,
          email: user.email,
          type: "google",
        };
        await loginWithGoogle(data, (result: { status: boolean; data: any }) => {
          if (result.status) {
            token.email = result.data.email;
            token.username = result.data.username;
            token.role = result.data.role;
          }
        });
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
