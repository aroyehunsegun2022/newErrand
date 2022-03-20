import React from 'react'
import { Navbar, Sidebar, History } from "../components"
import { Wallet } from "../containers"

const Dashboard = () => {
  return (
    <div>
        <Navbar />
        <div className='er__dashboard'>
            <Sidebar />
            {/* <History /> */}
            <Wallet />
        </div>
    </div>
  )
}

export default Dashboard