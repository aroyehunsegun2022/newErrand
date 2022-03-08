import React from 'react'
import { Navbar, Sidebar } from "../components"

const Dashboard = () => {
  return (
    <div>
        <Navbar />
        <div className='er__dashboard'>
            <Sidebar />
        </div>
    </div>
  )
}

export default Dashboard