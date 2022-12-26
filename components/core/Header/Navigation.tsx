import Link from 'next/link'
import Signature from '../../Icons/Signature'
import SmallNav from './SmallNav'
import ThemeSwitch from '../../ThemeSwitch'
import { useSession, signIn, signOut, getSession } from 'next-auth/react'
import LogIn from '../../ui/Buttons/login-btn'
import { useUser } from 'hooks/user/useUser'
import { useEffect } from 'react'
import { Avatar } from '../../ui/Avatar/Avatar'
import { GetServerSideProps } from 'next'
import { fetcherSSR } from '@/lib/fetchSSR'
import DropDown from '../../ui/DropDown/DropDown'

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
    <nav className=" flex px-6 py-4 item-center select-none backdrop-blur font-mono sticky top-0 z-50">
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
        {!currentUser ? (
          <LogIn />
        ) : (
          <DropDown>
            <Avatar letter={currentUser.name.charAt(0).toUpperCase()} image={currentUser.image} />
          </DropDown>
        )}
        <SmallNav />
      </div>
    </nav>
  )
}
// :()
// }
//   <Avatar  image={currentUser?.image} />

export default Navigation

// export async function getServerSideProps({ req }) {
//   const session = await getSession({ req })
//   if (!session) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     }
//   }
//   return {
//     props: { session },
//   }
// }

const getServerSideProps: GetServerSideProps = async (context) => {
  const fetcher = (url: string) => fetcherSSR(context.req, context.res, url)

  const url = 'http://localhost:5000/api/v1/user/profile'
  const [error, user] = await fetcher(url)
  if (error || !user) return { redirect: { statusCode: 307, destination: '/' } }

  // const result = getProps ? await getProps({ context, fetcher, user }) : {}
  // const props = (result as any).props || {}

  return { props: { user } }
}
