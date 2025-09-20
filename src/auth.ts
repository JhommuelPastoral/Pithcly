import NextAuth from "next-auth"
import Google from "next-auth/providers/google" 
import axiosInstance from "./lib/axios";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  session:{
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60
  },
  callbacks:{
    async signIn({profile, account}){
      try {
        if(!profile || !account) return false;
        const data = {
          email: profile.email,
          name: profile.name,
        }
        const response = await axiosInstance.post("/create-user", {data});
        account.userId = response.data.id;
        return true;
      } catch (error) {
        console.log("Sign in error", error);
      }
      return false;
    },

    async jwt({ token, account }) {
    if (account?.userId) {
      token.userId = account.userId
    }
    console.log(token);
    return token
  }

    // async jwt({profile, token}){
    //   if(profile){
    //     token.id = profile.userId;
    //   }
    //   console.log(token);
    //   return token
    // }


  }
})