import { Head } from 'next/document'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

// import { getSession, useSession } from 'next-auth/react'
import { useUser } from 'hooks/user/useUser'
import withAuth from '@/components/withAuth'
import useUpdateUser from 'hooks/user/useUpdateUser'
import UserCard from '@/components/ui/Cards/User'
import UserServices from '@/services/UserService'
import useFetchUser from 'hooks/useFetchUsers'
import ListLayout from '@/components/Layouts/ListLayout'
const Dashboard = ({ users }) => {
  // const { data: session } = useSession()
  const { data: currentUser } = useUser()
  const [userImage, setUserImage] = useState<string | ArrayBuffer | null>('')
  const [updating, setUpdating] = useState(false)

  // const { data: users } = useFetchUser()

  const updateUser = useUpdateUser()

  const handleUpdateProfile = async () => {
    if (!currentUser) {
      return
    }

    try {
      setUpdating(true)
      // console.log(currentUser._id)
      await updateUser(currentUser?._id, userImage)
      console.log('after update user')
    } catch (error) {
      console.log(error)
    } finally {
      setUpdating(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0]
      if (!selectedFile) return
      const MAX_FILE_SIZE = 2000000
      if (selectedFile.size > MAX_FILE_SIZE) {
        return
      }

      if (selectedFile.type !== 'image/png' && selectedFile.type !== 'image/jpeg') {
        return
      }

      imageChange(selectedFile)
    } else {
      console.log('error')
    }
  }

  const imageChange = (file: Blob) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      const { result } = reader
      setUserImage(result)
    }
    reader.readAsDataURL(file)
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h2>Dashboard</h2>
        <br />
        {/* {currentUser ? User({ currentUser }) : Guest()} */}
        {currentUser ? (
          <UserCard
            image={currentUser.image}
            name={currentUser.name}
            email={currentUser.email}
            role={currentUser.role}
            isVerified={currentUser.isVerified}
          />
        ) : (
          Guest()
        )}
        <br />
        <div className="flex flex-col">
          <ListLayout initialDisplayUsers={users} users={users} />
        </div>
      </div>
    </>
  )
}

function User({ currentUser }) {
  return (
    <>
      user
      {JSON.stringify(currentUser.name, null, 2)}
      <br />
      {JSON.stringify(currentUser.email, null, 2)}
      <br />
    </>
  )
}
function Guest() {
  return (
    <>
      <div>Guest</div>
    </>
  )
}

// export default withAuth(Dashboard)
export default Dashboard

// function updateUser(_id: any, userImage: string | ArrayBuffer) {
//   throw new Error('Function not implemented.')
// }
// export async function getServerSideProps({ req }) {
//   const { data: currentUser } = useUser()
//   if (!currentUser) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     }
//   }
//   return {
//     props: { currentUser },
//   }
// }

// export async function getServerSideProps() {
//   const users = await UserServices.getUsers()
//   return {
//     props: { users },
//   }
// }

export async function getStaticProps() {
  const users = await UserServices.getUsers()
  return {
    props: { users },
  }
}
