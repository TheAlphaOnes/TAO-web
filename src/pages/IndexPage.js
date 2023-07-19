import React from 'react'


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
            <hr style={{ border: '1px solid  #fd600c' }} />
            <Activity />
            <hr style={{ border: '1px solid  #fd600c' }} />
            <Footer />
            
        </div>
    )
}
