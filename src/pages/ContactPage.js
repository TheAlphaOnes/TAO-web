import React from 'react'
import {NavbarCustom as Navbar} from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

import "./ContactPage.css"

export default function ContactPage() {
  return (
    <div Style = {{
      backgroundImage:
      'url("img/contact-bg.svg")',
    }}>
     
      <Navbar/>
      <Contact/>
      <Footer/>
    </div>
  )
}
