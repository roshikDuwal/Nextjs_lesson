import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <div>Hello User page</div>
        <Link href="/users/roshik">User Detail</Link>
    </>
  )
}

export default page