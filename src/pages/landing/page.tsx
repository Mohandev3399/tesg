import LandingComponentHeader from '@/components/LandingPage/LandingPageHeader'
import React from 'react'
import styles from '../../app/page.module.css'
import HeroSectionLandingPage from '@/components/LandingPage/HeroSection'
import DetailsPanel from '@/components/LandingPage/detailPanel'
import CountsComp from '@/components/LandingPage/Counts'
import DonatePanel from '@/components/LandingPage/Donate'
import LandingComponentFooter from '@/components/LandingPage/LandingPageFooter'

const LandingPage = () => {
  return (
    
<div  >
      <main className={styles.main}>

 
     <LandingComponentHeader/>
      <HeroSectionLandingPage/>
     <DetailsPanel/>
     <CountsComp/>

     <DonatePanel/>
    
     
     
    
      </main>
      <footer className={styles.footer}>
      <LandingComponentFooter/>

      </footer>
    
    </div>

  )
}

export default LandingPage
