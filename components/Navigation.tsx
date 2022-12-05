import Link from 'next/link'
import Signature from './Signature'
import ThemeSwitch from './ThemeSwitch'

export interface navList {
  name: string
  href: string
}

export interface navList extends Array<navList> {}

const navLists = [
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Contact',
    href: '/contacts',
  },
]

const Navigation = () => {
  return (
    <nav className="flex px-6 py-4 item-center backdrop-blur font-mono sticky top-0 z-50">
      <Signature />
      <div className="flex-1"></div>
      <div className="flex items-center">
        <ul className="flex items-center space-x-2">
          {navLists.map(({ name, href }: any) => (
            <div className=" px-4 py-1 rounded-md bg-slate-500/10 opacity-70 hover:opacity-100  ">
              <Link className="text-medium font-bold" key={name} href={href}>
                {name}
              </Link>
            </div>
          ))}
        </ul>
        <span className="mx-4">|</span>
        <div className="flex align-middle justify-center bg-slate-300/10 rounded-full">
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  )
}

{
}
export default Navigation
