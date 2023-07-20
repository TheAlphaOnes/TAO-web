import React from 'react'
import { Link } from 'react-router-dom'
import './Foother.css'
export default function Footer() {
  return (

<footer className="mx-auto">
  <div id="foot-1">
    <div className="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
      <div className="col-span-full lg:col-span-2">
        {/* logo - start */}
        <div className="mb-4 lg:-mt-2">
          <a href="/" rel="noreferrer" className="inline-flex items-center gap-2 text-xl font-bold text-gray-100 md:text-2xl" aria-label="logo">
            <img src="img/ico.png" alt='' style={{height: 40, width: 40}} className="h-auto w-5 text-indigo-500" />
            TheAlphaOnes
          </a>
        </div>
        {/* logo - end */}
        <p className="mb-6 text-gray-400 sm:pr-8">TheAlphaOnes is a community of young developer from
          all-over the world mainly based on discord
          which got as ambition to revolutionize the world.</p>
        {/* social - start */}
        <div className="flex gap-4">
          <a rel="noreferrer" href="https://www.instagram.com/TheAlphaOnes/" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
          <img src='img/insta-foot.svg' alt='' />
          </a>
          <a rel="noreferrer" href="https://twitter.com/TheAlphaOnesDev" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
          <img src='img/twt.svg' alt='' />
          </a>
          <a rel="noreferrer" href="https://github.com/TheAlphaOnes/" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <img src='img/github-foot.svg' alt='' />
          </a>
          <a rel="noreferrer" href="https://discord.gg/nbrFDHmsK3" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <img src='img/cord-foot.svg' alt='' />
          </a>
        </div>
        {/* social - end */}
      </div>
      {/* nav - start */}
      <div>
        <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">Usefull Links</div>
        <nav className="flex flex-col gap-4">
          <div>
            <Link to="/contact" rel="noreferrer"  className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact Us</Link>
          </div>
          <div>
            <Link to="/launches" rel="noreferrer"  className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Launches</Link>
          </div>
          <div>
            <Link to="/project" rel="noreferrer"  className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Projects</Link>
          </div>
          <div>
            <Link to="/team" rel="noreferrer"  className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Team</Link>
          </div>
          <div>
            <Link to="/blog" rel="noreferrer"  className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</Link>
          </div>
        </nav>
      </div>
      {/* nav - end */}
      {/* nav - start */}
      <div>
        <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">Credits</div>
        <nav className="flex flex-col gap-4">
          <div>
            <a rel="noreferrer" href="https://thenorm.netlify.app" target="_blank" className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Vishnu Gupta aka Norm - Developer</a>
          </div>
          <div>
            <a rel="noreferrer" href="/" className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Doumbia Al-Hassan aka Caprisunpapy - UI/UX Designer</a>
          </div>
          <div>
            <a href="/" rel="noreferrer" className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Akshat Khare aka BitPixel - Tester &amp; Assister</a>
          </div>
        </nav>
      </div>
      {/* nav - end */}
    </div>
  </div>
  <div style={{backgroundColor: 'rgb(29, 27, 27)'}} className="flex flex-col items-center justify-between    ">
    <div className="py-3 text-center text-sm text-gray-400">© 2022 - TheAlphaOnes - All Power Conserved</div></div>
</footer>



  )
}
