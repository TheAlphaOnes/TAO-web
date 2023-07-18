import React from 'react'
import "./Home.css"

export default function Home() {
  return (
    <div>
<div id="intro" className=" py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <h1 id="tw" className="mb-4 text-center text-2xl font-bold  md:mb-6 lg:text-3xl"  >We Are TheAlphaOnes</h1> 
    <p id="disc" className="mx-auto max-w-screen-md text-center md:text-lg">TheAlphaOne is a community of young developper from all-over the world mainly based on discord which got as ambition to revolutionize the world.</p>
    <div style={{display: 'flex', justifyContent: 'center', margin: 25}}>
      <a className="tt" href="#about"> <img src='morebtn.svg' alt='' /> </a>
      <a className="tt" id="tt-discord" href="https://discord.gg/nbrFDHmsK3"> <img src="discBTN.svg" alt='' /></a>
    </div>
  </div>
  <div id="scrl-intro" style={{display: 'flex', justifyContent: 'center'}}>
    <a href="#about">
      <span>scroll down</span>
      <img src="scrlldown.png" alt='' />
    </a>
  </div>
</div>

    </div>
  )
}
