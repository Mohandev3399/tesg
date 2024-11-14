'use server';
import LandingComponentHeader from '@/components/LandingPage/LandingPageHeader'
import React from 'react'
import styles from "../page.module.css";
import HeroSectionLandingPage from '@/components/LandingPage/HeroSection';
import DetailsPanel from '@/components/LandingPage/detailPanel';
import CountsComp from '@/components/LandingPage/Counts';
import DonatePanel from '@/components/LandingPage/Donate';
import LandingComponentFooter from '@/components/LandingPage/LandingPageFooter';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});


const DashboardPage = () => {
 

  return (

<div className={poppins.className} >
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

export default DashboardPage
