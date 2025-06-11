import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: { email: {}, password: {} },
      authorize: async (credentials) => {
        let user = null;

        const response = await fetch(
          "https://mightyneck-us.backendless.app/api/data/user"
        );
        const data = await response.json();
        const existingUser = data.find(
          (user: { email: string }) => user.email === credentials.email
        );
        const existingPass = data.find(
          (user: { email: string; password: string }) =>
            user.password === credentials.password
        );

        user = existingUser;
        if (existingUser.user === existingPass.user) return user;

        if (!user) {
          return false;
        }
      },
    }),
  ],
});
