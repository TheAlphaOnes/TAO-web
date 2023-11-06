import React from 'react'
import Contact from '../components/Contact';

import "./ContactPage.css"

export default function ContactPage() {
  return (
    <div Style = {{
      backgroundImage:
      'url("img/contact-bg.svg")',
    }}>
     
      <Contact/>
    </div>
  )
}
