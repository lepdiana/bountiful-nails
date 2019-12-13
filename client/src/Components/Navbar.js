import React from 'react'
import { Link } from 'react-router-dom'

import '../Styles/navbar.css'

const Navbar = () => {
    return(
        <div className="navbar">
            <a href="/" id="navbarTitle">Bountiful Nails</a>
            <Link to='/' className='link'>Home</Link>
            <Link to='/about' className='link'>About</Link>
            <Link to='/services' className='link'>Services</Link>
            <Link to='/contactus' className='link'>Contact Us</Link>
        </div>
    )
}

export default Navbar