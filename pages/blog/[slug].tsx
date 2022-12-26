import Router, { useRouter } from 'next/router'
import React from 'react'

export default function page1() {
  const route = useRouter()
  const dis = route
  console.log(dis)
  const display = route.query.slug
  return <div>{display}</div>
}
