import { Head } from 'next/document'
import { useRouter } from 'next/router'
import React from 'react'

import { getSession, useSession } from 'next-auth/react'

export default function Dashboard() {
  const { data: session } = useSession()

  return (
    <>
      <div>
        <h2>Dashboard</h2>
        {session ? User({ session }) : Guest()}
      </div>
    </>
  )
}

function User({ session }) {
  return (
    <>
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
