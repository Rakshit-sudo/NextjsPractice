import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    // Google Provider
    GoogleProvider({
      clientId:
        "13337134246-uv6g1dbfeh02hd6b3ifhtaamukl9tr6o.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
});
