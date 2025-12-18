import Footer from '@/src/components/Footer/Footer'
import Navbar from '@/src/components/Navbar/Navbar'
import BackButton from '@/src/components/BackButton/BackButton'
import React from 'react'

const Consultation = () => {
  return (
      <>
        <Navbar />
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <BackButton />
          <div>Consultation</div>
        </div>
      <Footer />

        </>
   
  )
}

export default Consultation