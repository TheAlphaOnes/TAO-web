import React from 'react'
import { Helmet } from "react-helmet";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/About';
import Home from '../components/Home';
import Activity from '../components/Activity';




export default function IndexPage() {
    return (
        <div>
            <Navbar />
            <Home />
            <hr style={{ border: '1px solid  #fd600c' }} />
            <About />
            <Activity />
            <Footer />
            <Helmet>
                <script src="typer.js" type="text/javascript" />
            </Helmet>
        </div>
    )
}
