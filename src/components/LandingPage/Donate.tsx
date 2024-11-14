'use client'
import { Box, Button, Grid2, Paper, Typography } from '@mui/material'
import React from 'react'
import styles from "../../../src/app/page.module.css";

import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import { AccessAlarmOutlined, DoubleArrow } from '@mui/icons-material';
import { Poppins } from 'next/font/google';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});
const DonatePanel = () => {
  return (
    <Box sx={{ width: "100%", marginBottom:"36px" }} className={poppins.className}>
      <Grid2 container spacing={{ xs: 2, md: 3 }} maxWidth="lg" margin="auto" alignItems="stretch" p={{xs:2,md:2}}>
        <Grid2  size={{ xs: 12, md: 8, lg: 8 }}>
          <Paper
            sx={{
              backgroundImage: "url('/logo/det.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: "bottom",
              position: 'relative',
              minHeight: '300px',
              borderRadius: '0px'
            }}
          >
            {/* Blue overlay box */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: {xs:"100%",sm:'50%'},
                height: '100%',
                backgroundColor: "rgba(32, 105, 127, 0.7)", // semi-transparent blue overlay
                zIndex: 1,

              }}
            />

            {/* Content on top of blue overlay */}
            <Grid2
             
              size={{ xs: 12, md: 6, lg: 6 }}

              sx={{
                position: 'relative',
                zIndex: 2, // Place above the overlay
                color: 'white',
                padding: '24px',

                minHeight: '300px',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column'
              }}
            >
              <Box>
              
                <Typography className={styles.customFont} sx={{ fontSize: '24px', fontWeight: 500, color: '#ffffff', display: 'flex' }}><NewspaperOutlinedIcon style={{ fontSize: '32px' }} />&nbsp;{`LATEST NEWS`}</Typography>
              </Box>
              <Box mt={2}>
                <Typography className={styles.customFont} sx={{ fontSize: '18px', fontWeight: 400, color: '#ffffff' }}>ANNUAL MEET UP WITH ALL</Typography>
                <Typography className={styles.customFont} sx={{ fontSize: '12px', fontWeight: 200, color: '#ffffff' }} mt={1}>
                  {`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                </Typography>
              </Box>
            </Grid2>
          </Paper>
        </Grid2>

        <Grid2  size={{ xs: 12, md:4, lg: 4 }} >
          <Paper
            sx={{
              backgroundImage: "url('/logo/hrt.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: "bottom",
              position: 'relative',
              minHeight: '300px',
            }}
          >
            {/* Blue overlay box */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: "rgba(128, 0, 128, 0.7)",
                zIndex: 1,

              }}
            />

            {/* Content on top of blue overlay */}
            <Grid2
              
              size={{ xs: 12, md: 12, lg: 12 }}

              sx={{
                position: 'relative',
                zIndex: 2, // Place above the overlay
                color: 'white',
                padding: '24px 24px 0px 24px',

                minHeight: '300px',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                alignItems: "center"

              }}
            >
              <Box>
                <Typography className={styles.customFont} sx={{ fontSize: '24px', fontWeight: 500, color: '#ffffff' }}><VolunteerActivismOutlinedIcon style={{ fontSize: '32px' }} />&nbsp;{`DONATING BLOOD FUNDS`}</Typography>
              </Box>
              <Box mt={2}>
                <Typography className={styles.customFont} sx={{ fontSize: '18px', fontWeight: 400, color: '#ffffff' }}>ANNUAL MEET UP WITH ALL</Typography>
                <Typography className={styles.customFont} sx={{ fontSize: '12px', fontWeight: 300, color: '#ffffff' }} mt={1}>
                  {`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                </Typography>
              </Box>

              <Box>
                <Button type='button' className={styles.customFont} sx={{ fontSize: '12px', fontWeight: 500, backgroundColor: '#ffffff', color: 'rgba(128, 0, 128, 0.7)', width: 'max-content', position: 'relative', borderRadius: '0px' }}>DONATE NOW!</Button>

              </Box>

            </Grid2>

          </Paper>
        </Grid2>



        <Grid2  size={{ xs: 12, md: 8, lg: 8 }}   >
          <Grid2 container spacing={0}>

            <Grid2
              
              size={{ xs:12, md: 6, lg: 6 }}

              sx={{
                position: 'relative',
                zIndex: 2, // Place above the overlay
                color: 'white',
                padding: '24px',


                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: "#104b5f",
              height:'210px'

              }}
            >
              <Box>
                <Typography className={styles.customFont} sx={{ fontSize: '32px', fontWeight: 500, color: '#ffffff', display: 'flex' }}>{`HEALTH TIPS`}&nbsp;<Diversity1OutlinedIcon sx={{ fontSize: '42px' }} /></Typography>
              </Box>
              <Box>
                <Typography className={styles.customFont} sx={{ fontSize: '16px', fontWeight: 500, color: '#fffff7', display: 'flex', letterSpacing: '2px' }}>from our trusted people</Typography>
              </Box>

            </Grid2>

            <Grid2
              
              size={{ xs: 12, md: 6, lg: 6 }}

              sx={{
                position: 'relative',
                zIndex: 2, // Place above the overlay
                color: 'white',
                                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
               

              }}
            >
              <Paper
                sx={{
                  backgroundImage: "url('/logo/testng.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: "bottom",
                  position: 'relative',
                  
                  borderRadius: '0px',
                  width: '100%',
                  height:'210px',
                
                }}
              >
                {/* Blue overlay box */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: {xs:'15%',md:'18%'},
                    backgroundColor: "rgba(128, 0, 128, 0.7)",
                    zIndex: 1,

                  }}
                />

                {/* Content on top of blue overlay */}
                <Grid2
                  
                  size={{ xs: 12, md: 12, lg: 12 }}

                  sx={{
                    position: 'relative',
                    zIndex: 2, // Place above the overlay
                    color: 'white',
                  

                 minHeight:'210px',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    flexDirection: 'column',
                
                  }}
                >
                  <Box sx={{display:'flex', justifyContent:'center'}}>
                    <Typography sx={{fontSize:{xs:'12px', md:'14px'}}} className={styles.customFont}>JOIN US WITH LEADING BUSINESS VENDORS</Typography>
                  </Box>

                </Grid2>
              </Paper>

            </Grid2>
          </Grid2>

        </Grid2>

        <Grid2  size={{ xs: 12, md: 4, lg: 4 }} sx={{height:'210px'}}>
          <Paper elevation={3} sx={{width:'100%',height:'100%' , padding:'24px',display:'flex', flexDirection:'column', justifyContent:'space-between',}}>
          <Grid2 container spacing={1} alignItems="center" sx={{display:'flex', width:'100%'}}>
          <Grid2  size={{xs:12}}>
            <Typography className={styles.customFont} sx={{ fontSize:{xs:"24px",md: '24px',lg:'24px'}, fontWeight: 500, color: '#104b5f', display: 'flex' }}><AccessAlarmOutlined sx={{ fontSize:{xs:"32px",lg:'32px'}, display:{xs:"none",sm:"block"}}}/>&nbsp; VISITING HOURS</Typography>

          </Grid2>
          </Grid2>
        <Grid2 container spacing={1} alignItems="center" sx={{display:'flex', width:'100%'}}>
        <Grid2  size={{xs:4}}>
          <Typography  className={styles.customFont}variant="h3" sx={{ color: '#6b3a7d', fontWeight: 'bold' }}>
            10
            <Typography className={styles.customFont} component="span" variant="h6" sx={{ color: '#6b3a7d' }}>
              00
            </Typography>
            <Typography className={styles.customFont} variant="caption" sx={{ color: '#6b3a7d' }}>
            a.m.
          </Typography>
          </Typography>
          
        </Grid2>
        
        {/* Arrow */}
        <Grid2  size={{xs:4 }} sx={{display:'flex', justifyContent:'center'}}>
          <DoubleArrow sx={{ fontSize: 40, color: '#6b3a7d' }} />
        </Grid2>
        
        {/* End Time */}
        <Grid2  size={{xs:4}}>
          <Typography className={styles.customFont} variant="h3" sx={{ color: '#6b3a7d', fontWeight: 'bold' }}>
            7
            <Typography className={styles.customFont} component="span" variant="h6" sx={{ color: '#6b3a7d' }}>
              30
            </Typography>
            <Typography className={styles.customFont} variant="caption" sx={{ color: '#6b3a7d' }}>
            p.m.
          </Typography>
          </Typography>
          
        </Grid2>
        </Grid2>
          </Paper>
       
    </Grid2>
      </Grid2>
    
    </Box>

  )
}

export default DonatePanel

