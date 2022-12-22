import { useLogout } from 'hooks/useAuth'
import { useUser } from 'hooks/user/useUser'
// import { useSession, signIn, signOut } from 'next-auth/react'
// import { redirect } from 'next/dist/server/api-utils'
import Link from 'next/link'

export default function LogIn() {
  // const { data: session } = useSession()
  const { data: currentUser } = useUser()

  const logout = useLogout()

  const handleLogout = () => {
    logout()
    window.location.href = '/login'
  }

  if (!currentUser) {
    return (
      <>
        <Link href="/login">
          <button>SignIn</button>
        </Link>
      </>
    )
  }
  return (
    <>
      <button onClick={handleLogout}>SignOut</button>
    </>
  )
}
