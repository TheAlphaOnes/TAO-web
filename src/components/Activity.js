import React from 'react'
import "./Activity.css"

export default function Activity() {
  return (
    <div>
     <section>
  <section className="text-white body-font">
    <div className="container flex flex-wrap px-5 py-24 pb-0 mx-auto items-center">
      <div className="md:w-2/3 md:pr-12 md:py-5  md:border-b-0  md:mb-0 pb-10  ">
        <h1 className="sm:text-3xl text-2xl font-medium title-font pb-4  pl-8 text-white" id="about-title">Our activities</h1>
        <h2 className="mb-4 text-2xl font-bold md:mb-6 lg:text-5xl">We litteraly do anythings </h2>
        <p className="leading-relaxed" id="about-title-dic">We are a passionate team of digital professionals dedicated to providing our clients with the best solutions in marketing and website development.</p>
      </div>
    </div></section>
  <div className="py-6 con-di sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8" style={{display: 'flex', justifyContent: 'center', marginLeft: '5%'}}>
      <div className="mb-4 wwd-con  grid grid-cols-1 gap-4 sm:grid-cols-1 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">


        <div id="wwd-box-1" className="wwd-box group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
          <h1 className="wwd-box-t">AI developpment</h1>
          <p>Artificial intelligence is revolutionizing our world at an unprecedented rate. At home, we are passionate about the latest advances in AI and enjoy discussing them, learning more and discovering new applications.</p>
        </div>


        <div id="wwd-box-2" className="wwd-box group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
          <h1 className="wwd-box-t">Web Developpment</h1>
          <p>Web development is a critical aspect of building a successful online presence. It involves creating and maintaining websites, as well as developing web-based applications to enhance user experiences. At our agency, we take web development seriously and work with our clients to create custom solutions that meet their unique needs.</p>
        </div>
 
        <div id="wwd-box-3" className="wwd-box group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
          <h1 className="wwd-box-t">Branding</h1>
          <p>Branding is a critical component of any successful business strategy. It involves creating a unique and memorable identity for your business that sets it apart from the competition and resonates with your target audience. At our agency, we specialize in branding services that help businesses of all sizes build a strong and recognizable brand.</p>
        </div>


        <div id="wwd-box-4" className="wwd-box group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
          <h1 className="wwd-box-t">Every Damn in Tech</h1>
          <p>UI design, or user interface design, is the process of designing the visual elements of a website, application, or digital product to make it as easy and intuitive as possible for users to interact with. At our agency, we believe that great UI design is crucial to the success of any digital product, and we have a team of experienced designers who specialize in creating beautiful, functional interfaces that delight users.</p>
        </div>
        {/* image - end */}
      </div>
    </div>
  </div>
</section>


    </div>
  )
}
