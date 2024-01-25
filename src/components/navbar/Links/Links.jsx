import Link from 'next/link'
import React from 'react'

const Links = () => {
    const Links=[
        {
            path:'/',
            title:'home'
        },
        {
            path:'/blog',
            title:'blog'
        },
        {
            path:'/about',
            title:'about'
        },
        {
            path:'/contact',
            title:'contact'
        },
    ]

  return (
    <div>
      {Links.map((item)=>{
         return (
          <Link key={item.path} href={item.path} >{item.title}</Link>
         )
      })}
      <div>
      
      </div>
    </div>
  )
}

export default Links
