import cx from 'classnames'
import { useUser } from 'hooks/user/useUser'
import { useEffect, useRef, useState } from 'react'

export default function DropDown({ children }) {
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false)
  const { data: currentUser } = useUser()

  const dropDownRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    window.addEventListener('click', handleClickOutSide)
    return () => window.removeEventListener('click', handleClickOutSide)
  }, [isOpenDropDown])

  const handleClickOutSide = (e: Event) => {
    const target = e.target
    if (target instanceof Node && dropDownRef.current?.contains(target)) {
      return
    }
    setIsOpenDropDown(false)
  }

  const handleCloseDropDown = () => {
    setIsOpenDropDown(!isOpenDropDown)
  }

  return (
    <li ref={dropDownRef} className="relative">
      <div onClick={handleCloseDropDown} className="">
        <div>{children}</div>
      </div>
      <div
        className={cx(
          'absolute p-2 rounded top-10 right-1 w-40 bg-slate-50/10 transition-opacity',
          isOpenDropDown ? 'visible' : 'invisible'
        )}
        aria-label="drop-menu"
      >
        <div className="flex flex-col">
          <h3 className="text-m">Hey! {currentUser.name}</h3>
          <DropDownList />
          <DropDownList />
          <DropDownList />
        </div>
      </div>
    </li>
  )
}

const DropDownList = () => {
  return (
    <div className="p-1 my-1 rounded bg-slate-50/20 hover:bg-slate-100/5 flex flex-row">
      <div className="w-1/4">{/* <GitHubLogo /> */}</div>
      <div className="w-3/4">Name</div>
    </div>
  )
}
