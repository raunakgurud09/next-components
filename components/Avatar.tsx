import { useEffect, useState } from 'react'
import NextImage from 'next/image'

export function AvatarImage({ image }: any) {
  return (
    <>
      <NextImage
        src={image}
        className="object-cover object-center rounded-full h-[100%]"
        alt="profile"
        height={20}
        width={40}
      />
    </>
  )
}

export function Avatar({ letter = 'A', image = '' }: any) {
  // console.log(image)
  let [isImage, setIsImage] = useState<boolean>(true)
  useEffect(() => {
    image === '' ? setIsImage(false) : setIsImage(true)
  }, [image])

  return (
    <div className="flex w-10 h-10 items-center text-center justify-center rounded-full  bg-gray-300/20">
      {isImage ? (
        <AvatarImage image={image} />
      ) : (
        <div className="font-mono font-medium ">{letter}</div>
      )}
    </div>
  )
}
