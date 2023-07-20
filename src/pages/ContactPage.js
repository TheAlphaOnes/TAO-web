import React from 'react'
import {NavbarCustom as Navbar} from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

import "./ContactPage.css"

export default function ContactPage() {
  return (
    <div>
      <Navbar/>
      <Contact/>
      <Footer/>
    </div>
  )
}
