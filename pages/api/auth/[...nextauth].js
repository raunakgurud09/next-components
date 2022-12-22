import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Credentials({
      name: 'Credentials',
      async authorize(credentials, req, values) {
        console.log(values)
        const res = await fetch('http://localhost:5000/api/v1/auth/login', {
          method: 'POST',
          body: JSON.stringify(values),
        })
        // console.log(res)
      },
    }),
  ],
}
export default NextAuth(authOptions)
