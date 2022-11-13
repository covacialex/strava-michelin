import NextAuth from "next-auth";
import StravaProvider from "next-auth/providers/strava";

export const authOptions = {
  providers: [
    StravaProvider({
      clientId: process.env.STRAVA_CLIENT_ID,
      clientSecret: process.env.STRAVA_SECRET,
      authorization: {
        params: {
          scope: ["profile:read_all", "activity:read_all"].join(","),
        },
      },
    }),
  ],
  // callbacks: {
  //   async jwt({ token, account, profile }) {
  //     // Persist the OAuth access_token and or the user id to the token right after signin
  //     if (account) {
  //       token.accessToken = account.access_token;
  //       token.id = profile.id;
  //     }
  //     return token;
  //   },
  // },
};

export default NextAuth(authOptions);
