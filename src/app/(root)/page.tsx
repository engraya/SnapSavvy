import React from 'react'
import { UserButton, SignIn } from '@clerk/nextjs' 
function Home() {
  return (
    <div>
      Home Page
      <div>
        <UserButton afterSignOutUrl='/'/>
      </div>
    </div>
  )
}

export default Home
