import { Head } from 'next/document'
import { useRouter } from 'next/router'
import React from 'react'

// import { getSession, useSession } from 'next-auth/react'
import { useUser } from 'hooks/user/useUser'
import withAuth from '@/components/withAuth'
const Dashboard = () => {
  // const { data: session } = useSession()
  const { data: currentUser } = useUser()
  return (
    <>
      <div>
        <h2>Dashboard</h2>
        {currentUser ? User({ currentUser }) : Guest()}
      </div>
    </>
  )
}

function User({ currentUser }) {
  return (
    <>
      user
      {JSON.stringify(currentUser.name,null,2)}<br />
      {JSON.stringify(currentUser.email,null,2)}<br />
      {JSON.stringify(currentUser.image,null,2)}<br />
      {JSON.stringify(currentUser.password,null,2)}<br />
      {/* <div>{session.user.name}</div> */}
      {/* <div>{JSON.stringify(session.user)}</div> */}
      {/* <div>{session.user.email}</div> */}
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

export default withAuth(Dashboard)

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
