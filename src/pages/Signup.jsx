import React from 'react'
import { Navbar, Buttons } from "../components"
import { Download, Footer } from "../containers"

const Signup = () => {
  return (
    <div>
        <Navbar />
        <div  className='er__signup'>
          <div className='er_errander'>
            <Buttons url='/errandersignup' title='Sign up as an Errander' content='Do you want to...' />
          </div>
          <div className='er_errandee'>
            <Buttons url='/errandeesignin' title='Sign up as an Errandee' content='Can you...' />
          </div>
          <div className='er_artisan'>
            <Buttons url='/artisansignin' title='Sign up as an Artisan' content='Are you...' />
          </div>
        </div>
        <Download />
        <Footer />
    </div>
  )
}

export default Signup