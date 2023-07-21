import React from 'react'
import { Link } from 'react-router-dom'
import "./Contact.css"
export default function Contact() {
    return (
        <section className="text-white body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1  className="sm:text-3xl text-3xl font-medium title-font mb-4 title-gradent">Contact Us</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">Have a Project in Mind? , Lets Talk!!</p>
                </div>
                <div class="flex flex-wrap justify-center">

      <div class="xl:w-1/4 m-2 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 class="text-lg sm:text-xl title-gradent font-medium title-font mb-2">Social Media's</h2>
        <p class="leading-relaxed text-base mb-4"><span  class="text-indigo-500 inline-flex items-center">
          <Link to="https://www.instagram.com/TheAlphaOnes/" target='_blank' ><img alt='' className='m-2' src='/img/insta-foot.svg' /></Link>
          <Link to="https://github.com/TheAlphaOnes/" target='_blank' ><img alt='' className='m-2' src='/img/github-foot.svg' /></Link>
          <Link to="https://twitter.com/TheAlphaOnesDev" target='_blank' ><img alt='' className='m-2' src='/img/twt.svg' /></Link>
          <Link to="https://discord.com/invite/nbrFDHmsK3" target='_blank' ><img alt='' className='m-2' src='/img/cord-foot.svg' /></Link>
        </span>
        </p>
      </div>

      <div class="xl:w-1/4 m-2 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 class="text-lg sm:text-xl title-gradent font-medium title-font mb-2">Visit Us</h2>
        <p class="leading-relaxed text-base mb-4">
          <span  class="text-white   items-center">
          <Link to="https://thenorm.netlify.app" target='_blank' className='hover:text-red-600' ><span className='text-red hover:text-white'>Founder</span> - Vishnu aka Norm</Link><br/>
          <Link to="https://mrpixel.netlify.app" target='_blank' className='hover:text-red-600' ><span className='text-red hover:text-white'>Co.Founder</span> - Akshat aka Mr.Pixel</Link><br/>
          <Link to="" className='hover:text-red-600' ><span className='text-red hover:text-white' >Official-Member</span> - Doumbia aka Caprisunpapy</Link><br/>
          

          
        </span>
        </p>
      </div>
      
      <div class="xl:w-1/4 m-2 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 class="text-lg sm:text-xl title-gradent font-medium title-font mb-2">E-Mail's Dudes</h2>
        <p class="leading-relaxed text-base mb-4"><span  class="text-white  items-center">
          <Link to="mailto:thealphaones.dev@gmail.com" target='_blank' className='hover:text-red-500' >- thealphaones.dev@gmail.com</Link><br/>
          <Link to="mailto:thenormvg@gmail.com" target='_blank' className='hover:text-red-500' >- thenormvg@gmail.com</Link><br/>
          <Link to="mailto:thebitpixel.alpha@gmail.com" target='_blank' className='hover:text-red-500' >- thebitpixel.alpha@gmail.com</Link><br/>

        </span>
        </p>
      </div>

    </div>
            </div>

        </section>

    )
}




