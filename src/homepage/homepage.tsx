import React from 'react'
import HeroSection from '../components/heroSection/heroSection'
import CeoNote from '../components/CeoNote/CeoNote'
import OurStory from '../components/OurStory/OurStory'
import CoreStrengths from '../components/CoreStrengths/CoreStrengths'
import SmartSolutions from '../components/SmartSolutions/SmartSolutions'
import OurImpacts from '../components/OurImpacts/OurImpacts'
import LetsTalk from '../components/LetsTalk/LetsTalk'

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
    </div>
  )
}

export default HomePage