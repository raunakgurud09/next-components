import { Head } from 'next/document'
import { useRouter } from 'next/router'
import React from 'react'

import { AuthContext } from '../src/context/auth-context'

export default function Dashboard() {
  const router = useRouter()
  const authContext = React.useContext(AuthContext)

  React.useEffect(() => {
    // checks if the user is authenticated
    authContext.isUserAuthenticated() ? router.push('/dashboard') : router.push('/')
  }, [])

  return (
    <React.Fragment>
      <div>
        <h2>Dashboard</h2>
      </div>
    </React.Fragment>
  )
}
