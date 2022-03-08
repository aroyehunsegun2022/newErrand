import React from 'react'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Googlestore, Applestore } from "../../components"
import "./footer.css"
import logo from "../../assets/eerrand.png"

const Footer = () => {
  return (
    <div className='er__footer'>
        <div className='er__footer-links'>
            <div className='company'>
                <h4>Company</h4>
                <p><a href='fdgsh'>About us</a></p>
                <p><a href='fhf'>How e-errand works</a></p>
                <p><a href='/'>Contact</a></p>
                <p><a href='/'>Careers</a></p> 
            </div>
            <div className='products'>
                <h4>Products</h4>
                <p><a href='fdgsh'>Errander</a></p>
                <p><a href='/'>Errandee</a></p>
                <p><a href='/'>Artisans</a></p>
            </div>
            <div className='community'>
                <h4>Join our Community</h4>
                <div className='icons'>
                    <p><a href='dd'><LinkedInIcon sx={{ fontSize: 22, marginRight: 1 }} /></a></p>
                    <p><a href='d'><InstagramIcon sx={{ fontSize: 22, marginRight: 1 }} /></a></p>
                    <p><a href='gfh'><TwitterIcon sx={{ fontSize: 22, marginRight: 1 }} /></a></p>
                    <p><a href='gfh'><FacebookIcon sx={{ fontSize: 22, marginRight: 1 }} /></a></p>
                </div>
                <div className='apps'>
                    <div className='gstore'><Link to='/'> <Googlestore /></Link></div>
                    <div className='astore'><Link to="/"> <Applestore /></Link></div>
                </div>
                <div className='help-center'>
                        <img src={logo} alt='logo' />
                        <p><a href='dd'> Visit Help Center</a></p>
                </div>
            </div>
        </div>
        <div className='copyright'>
            <div className='copy'>
                <p>(c) 2022 eIndustries Limited.</p>
            </div>   
            <div className='useful-links'>
                <p>Privacy</p>
                <div className='vert'></div>
                <p>Accessiblity</p>
                <div className='vert'></div>
                <p>Terms and Condition</p>
            </div>
        </div>
    </div>
  )
}

export default Footer