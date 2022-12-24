import { getSession } from 'next-auth/react'
import NextImage from 'next/image'
import Link from 'next/link'
import { Avatar } from '../Avatar'
import FilledButton from '../Buttons/Filled'
import OutlinedButton from '../Buttons/Outlined'
import ThemeSwitch from '../ThemeSwitch'

interface FirstCard {
  title: string
  link: string
  date: any
  description?: string
  image?: any
  icon?: any
}
export default function FirstCard({
  title,
  image,
  description,
  link,
  icon,
  date,
}: FirstCard): JSX.Element {
  return (
    <>
      <div className="m-4 flex flex-col w-96 h-[480px] border border-[#49454F]  rounded-xl ">
        <div className="flex flex-row px-3 py-4">
          <div className="flex flex-row flex-grow  ">
            <Avatar image={image} />
            <div className="ml-4">
              <div className="font-medium">{title}</div>
              <div className="font-thin text-xs opacity-50">{date}</div>
            </div>
          </div>
          <div className="flex justify-center items-center w-10 h-10 bg-gray-300/20 rounded-full">
            {/* <Options /> */}
            {/* <EditIcon></EditIcon> */}
            <ThemeSwitch />
          </div>
        </div>
        <div className="cover">
          <NextImage
            src={image}
            className="object-cover object-center sm:h-20 md:h-36 lg:h-48"
            alt="profile"
            height={200}
            width={480}
          />
        </div>
        <div className="flex flex-grow flex-col justify-between p-4">
          <h3 className="font-medium text-2xl">{title}</h3>
          <p>{description}</p>
          <div>
            <Link href={link}>
              <FilledButton text="Enable" className="mr-4" />
            </Link>
            <a href="http://localhost:3000" target={'_blank'}>
              <OutlinedButton text="Disable" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
