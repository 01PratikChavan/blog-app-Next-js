import React from 'react'
import Link from 'next/link'
const NotFoundPage = () => {
  return (
    //com
    <div>
      <h2>Page Not found</h2>
      <p>Check the URL you entered !!!</p>
      <Link href='/'>Return to Home</Link>
    </div>
  )
}

export default NotFoundPage
