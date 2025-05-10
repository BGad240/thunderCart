//we create this file to make options and pass to route.js
import GoogleProvider from 'next-auth/providers/google'
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    session: {
        strategy: "jwt",
        maxAge: 1 * 24 * 60 * 60  //1 day
    },
    jwt: {

    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/auth/login',
        newUser: '/auth/signup'
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
            }
            return token
        },
        async session({ session, token }) {
            session.user.id = token.id
            return session
        }
    }
}