import React from 'react'
import assets from "../assets/assets"
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <div>
      {/* Logo */}
        <div>
          <img src={assets.navbarlog} alt='navbar logo'/>
        </div>
      {/* Right Side */}
        <nav >
        <Link to="home" smooth={true} duration={500} offset={-80} className="cursor-pointer">Home</Link>
        <Link to="features" smooth={true} duration={500} offset={-80} className="cursor-pointer">Features</Link>
        <Link to="reviews" smooth={true} duration={500} offset={-80} className="cursor-pointer">Reviews</Link>
        <Link to="pricing" smooth={true} duration={500} offset={-80} className="cursor-pointer">Pricing</Link>
        <Link to="blog" smooth={true} duration={500} offset={-80} className="cursor-pointer">Blog</Link>
      </nav>
    </div>
  )
}

export default Header