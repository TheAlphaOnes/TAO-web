import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div>
<header className=" body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav id="nav" className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <a href="#about" id="⭐" className="mr-5 hover:text-gray-600">About Us</a>
      <a href="/" className="mr-5 hover:text-gray-600">Launches</a>
      <a href="/" className="mr-5 hover:text-gray-600">Team</a>
      <a href="/" className="mr-5 hover:text-gray-600">Contact Us</a>
      <a href="/" className="hover:text-gray-600">Projects</a>
    </nav>
    <a href='' className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center  lg:items-center lg:justify-center mb-4 md:mb-0">
      <img src="ico.png" className="w-10 h-10  " alt=''  />
      <span className="ml-3 text-xl text-white" >TheAlphaOnes</span>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
    </div>
  </div>
</header>


    </div>
  )
}
