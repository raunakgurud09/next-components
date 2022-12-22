import Link from 'next/link'
import { Avatar } from './Cards/first'
import Signature from './Signature'
import SmallNav from './SmallNav'
import ThemeSwitch from './ThemeSwitch'
import { useSession, signIn, signOut, getSession } from 'next-auth/react'
import LogIn from './login-btn'
import { useUser } from 'hooks/user/useUser'
import { useEffect } from 'react'

export interface navList {
  name: string
  href: string
}

export interface navList extends Array<navList> {}

export const navLists = [
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Login',
    href: '/login',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'dashboard',
    href: '/dashboard',
  },
]

const icon = '/../public/mypic.jpg'

const Navigation = () => {
  const { data: session } = useSession()
  const { data: currentUser } = useUser()
  useEffect(() => {

    return () => {}
  }, [currentUser])

  return (
    <nav className="flex px-6 py-4 item-center select-none backdrop-blur font-mono sticky top-0 z-50">
      <Signature />
      <div className="flex-1"></div>

      <div className="hidden md:flex items-center">
        <ul className="flex items-center space-x-2">
          {navLists.map(({ name, href }: any) => (
            <div className=" px-4 py-1 rounded-md hover:bg-slate-500/10 opacity-70 hover:opacity-100  ">
              <Link className="text-medium font-light" key={name} href={href}>
                {name}
              </Link>
            </div>
          ))}
          <span className="w-px h-6 mx-6 bg-900"></span>
        </ul>
      </div>

      <div className="flex items-center space-x-6 text-300 md:space-x">
        <ThemeSwitch />
        {currentUser ? <Avatar image={currentUser.image} /> : <Avatar />}
        <SmallNav />
        <LogIn />
      </div>
    </nav>
  )
}

export default Navigation

export async function getServerSideProps({ req }) {
  const session = await getSession({ req })
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
  return {
    props: { session },
  }
}
