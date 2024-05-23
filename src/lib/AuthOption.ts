import User from "@/models/userModel";
import connect from "@/utils/mongodb";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
  ],
  callbacks: {
    async jwt({ token, account, user }: any) {
      if (account?.provider === "credentials") {
        token.username = user.username;
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: any) {
      if ("username" in token) {
        session.user.username = token.username;
      }
      if ("email" in token) {
        session.user.email = token.email;
      }
      if ("role" in token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
