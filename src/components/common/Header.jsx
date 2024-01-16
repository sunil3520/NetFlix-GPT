import React from 'react'
import logo from "../../assets/logo.svg"
import netflixLogo from "../../assets/Netflix-logo.png"

const Header = () => {
  return (
    <div className="absolute bg-gradient-to-b from-black top-0 w-44 z-50">
        <img  src={netflixLogo} alt="Logo" />
    </div>
  )
}

export default Header