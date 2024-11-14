import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import Collaboration from '../components/Collaboration'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import Roadmap from '../components/Roadmap'
import Footer from '../components/Footer'
import ButtonGradient from '../assets/svg/ButtonGradient'
import { BrowserRouter as Router } from "react-router-dom"
import './alchemy2.css'

const Alchemy2 = () => {
    return (
        <>
            <Router>
                <div id='main-container' className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                    <Header />
                    <Hero />
                    <Benefits />
                    <Collaboration />
                    <Services />
                    <Pricing />
                    <Roadmap />
                    <Footer />
                </div>
                <ButtonGradient />
            </Router>
        </>
    )
}

export default Alchemy2