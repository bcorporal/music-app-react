import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import {GiCarWheel} from 'react-icons/gi';
import {FaInstagram, FaFacebook} from 'react-icons/fa';
import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [slide, setSlide] = useState(false)

    const handleNav = () => {
    setNav(!nav)
    setSlide(!slide)
    }
   
  return (
    <div className='navbar'>
    <div className='container'>
    <div className={slide ? 'logo slide-right' : 'logo'}>
        <h3>Music</h3>
    </div>

    <ul className={nav ? 'nav-menu active' : 'nav-menu' }>
    <li><a href="/">Music</a></li>
    <li><a href="/">Music</a></li>
    <li><a href="/">Music</a></li>
    <li><a href="/">Music</a></li>
    <li><a href="/">Music</a></li>

    <div className="mobile-menu">
    <button>shop</button>
    <button>account</button>
    <div className='social-icons'>
    <FaFacebook className='icon' />
    <FaInstagram className='icon' />
    <GiCarWheel className='icon' />
    </div>
    </div>

    </ul>

    <ul className='nav-menu hide'>
    <li><a href="/">Music</a></li>
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