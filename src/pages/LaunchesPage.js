import React from 'react'
import {NavbarCustom as Navbar} from '../components/Navbar';
import Footer from '../components/Footer';
import Launches from '../components/Launches';

import { Helmet } from "react-helmet";


export default function LaunchesPage() {
  return (
    <div>
      <Navbar/>
      <Launches/>
      <Footer/>
      <Helmet>
        <script src="expander.js" type="text/javascript" />
      </Helmet>
    </div>
  )
}
