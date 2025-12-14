import React from 'react'
import HeroSection from '../components/heroSection/heroSection'
import CeoNote from '../components/CeoNote/CeoNote'
import OurStory from '../components/OurStory/OurStory'
import CoreStrengths from '../components/CoreStrengths/CoreStrengths'
import SmartSolutions from '../components/SmartSolutions/SmartSolutions'
import OurImpacts from '../components/OurImpacts/OurImpacts'
import LetsTalk from '../components/LetsTalk/LetsTalk'
import ProjectsCarousel from '../components/ProjectsCarousel/ProjectsCarousel'
import ContactCTA from '../components/callToAction/CallToAction'

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <CeoNote />
            <OurStory />
            <CoreStrengths />
            <SmartSolutions />
            <OurImpacts />
            <LetsTalk />
            <ProjectsCarousel />
            <ContactCTA />
        </div>
    )
}

export default HomePage