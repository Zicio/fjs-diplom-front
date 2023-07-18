import { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import signInRequest from "@/components/Forms/signIn/signIn-Api";

const authConfig: AuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const response: Response = await signInRequest(credentials);
        if (response.ok) {
          return (await response.json()) as User;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
};

export default authConfig;
