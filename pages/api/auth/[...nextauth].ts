import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "NextAuthCredentials",
      credentials: {},
      async authorize(credentials, req) {


        const  {email, password} = credentials as {
          email: string,
          password: string
        }
         
        console. log(credentials, req)

        return {
          id: "1",
          name: "Gabriel P",
          email: "gepe@exemplo.com",
        };
      },
    }),
  ],
};
export default NextAuth(authOptions);
