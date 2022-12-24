import { useEffect, useState } from 'react'

export default function SmallBadge({ children, number = 2 }) {
  const [count, setCount] = useState<number>(number)

  // useEffect(() => {}, [count])

  const incrementCount = () => {
    if (count >= 9) {
      return setCount(0)
    }
    setCount(count + 1)
    // setCount((count) => count++)
    console.log(count)
  }

  return (
    <div className="max-w-fit relative justify-center items-center">
      <div className="flex-shrink">{children}</div>
      <div className="rounded-full w-5 h-5 bg-red-600 absolute top-[-10%] right-[0] flex justify-center items-center">
        <div className="text-xs" onClick={incrementCount}>
          {count}
        </div>
      </div>
    </div>
  )
}
