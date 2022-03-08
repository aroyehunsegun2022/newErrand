import React from 'react'
import { Erranders} from "../../components"
import "./who.css"

const Who = () => {
  return (
    <div className='er__who'>
        <div className='er__who-components'>
            <Erranders title="Who is an Errander?" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
            <Erranders title="Who is an Errander?" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
            <Erranders title="Who is an Errander?" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
        </div>
        <div className='semi-circle' ></div>
    </div>
  )
}

export default Who