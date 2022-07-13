import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import {FaInstagram, FaFacebook} from 'react-icons/fa';
import { Link } from 'react-scroll'

import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [slide, setSlide] = useState(false)

    const handleNav = () => {
    setNav(!nav)
    setSlide(!slide)
    }

    const handleClose = () => {
      setNav(!nav)
    }
   
  return (
    <div className='navbar'>
    <div className='container'>
    <div className={slide ? 'logo slide-right' : 'logo'}>
        <h3>Music</h3>
    </div>

    <ul className={nav ? 'nav-menu active' : 'nav-menu' }>
    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="home" spy={true} smooth={true} duration={500}>Home</Link></a></li>
    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="music" spy={true} smooth={true} duration={500}>Music</Link></a></li>
    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="festivals" spy={true} smooth={true} duration={500}>Festivals</Link></a></li>
    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></a></li>

    


    <div className="mobile-menu">
    <button>shop</button>
    <button>account</button>
    <div className='social-icons'>
    <FaFacebook className='icon' />
    <FaInstagram className='icon' />
    </div>
    </div>

    </ul>

    <ul className='nav-menu hide'>
    <li><a href="/">Shop</a></li>
    <li><a href="/">Account</a></li>
    </ul>

    <div className='hamburger' onClick={handleNav} >
    {nav ? (<FaTimes size={20} style={{color: '#ffffff'}} />) : (<FaBars size={20} style={{color: '#ffffff'}} />)}

    </div>
    </div>
    </div>
  )
}

export default Navbar