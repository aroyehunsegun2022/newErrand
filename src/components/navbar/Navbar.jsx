import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import logo from "../../assets/eerrand.png"
import "./navbar.css"


const Menu = () => (
    <>
        <p><Link className='link' to="/">Company</Link></p>
        <p><Link className='link' to="/sd">Safety</Link></p>
        <p><Link className='link' to="/sd">Help</Link></p>
        <p className='vert'></p>
        <p><Link className='link' to="/signin">Login</Link></p>
        <p className='signup-btn'><Link className='link btns' to="/signup">Signup</Link></p>
        {/* <p><a href="#blog">Blog</a></p> */}
    </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='e__navbar'>
        {/* <div className='e__navbar-links'> */}
            <div className='e__navbar-links_logo'>
                <img src={logo} alt='logo' />
            </div>
            {/* <div className='e__navbar-links_container'>
                <Menu />
            </div> */}
        {/* </div> */}
        <div className='e__navbar-links_container'>
                <Menu />
        </div>
        {/* <div className='e_navbar-btn'>
            <p><Link to="/contact">Contact Us</Link></p>
        </div> */}
        <div className='e_navbar-menu'>
            {toggleMenu ? <RiCloseLine color='#000' size={27} onClick={() => setToggleMenu(false)} /> 
            : <RiMenu3Line color='#000' size={27} onClick={() => setToggleMenu(true)} /> 
            }
            {toggleMenu && (
                <div className='e_navbar-menu_container scale-up-center'>
                    <div className='e_navbar-menu_container-links'>
                        <Menu />
                        {/* <div className='e_navbar-menu_container-links-btn'> */}
                            {/* <button type='button'>Contact Us</button> */}
                            {/* <a className='mymenubtn' href='/contact'>Contact Us</a> */}
                            {/* <p className='mymenubtn'><Link to="/contact">Contact Us</Link></p> */}
                        {/* </div> */}
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Navbar