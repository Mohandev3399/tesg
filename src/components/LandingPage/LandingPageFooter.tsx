'use client'
import { FacebookOutlined, Instagram, LinkedIn } from '@mui/icons-material'
import { Box, Grid2, Typography } from '@mui/material'
import React from 'react'
import styles from '@/app/page.module.css'

const LandingComponentFooter = () => {
  return (
    <Box sx={{ flexGrow: 1,backgroundColor:"#104b5f" }}>
      <Grid2 container  alignItems={'center'} margin={'auto'} spacing={2} maxWidth={'lg'} pt={4} pb={4} pl={{xs:2,md:2}} pr={{xs:2,md:2}}>
      
       
        {
          [{title:'Section 1.10.32 of', one:'Sed ut perspiciatis unde', two:'sed quia consequuntur', three:'ullam corporis',four:'Qui dolorem '},{title:'Section 1.10.32 of', one:'Sed ut perspiciatis unde', two:'sed quia consequuntur', three:'ullam corporis',four:'Qui dolorem '},{title:'Section 1.10.32 of', one:'Sed ut perspiciatis unde', two:'sed quia consequuntur', three:'ullam corporis',four:'Qui dolorem '},{title:'Section 1.10.32 of', one:'Sed ut perspiciatis unde', two:'sed quia consequuntur', three:'ullam corporis',four:'Qui dolorem '},{title:'Section 1.10.32 of', one:'Sed ut perspiciatis unde', two:'sed quia consequuntur', three:'ullam corporis',four:'Qui dolorem '},{title:'Section 1.10.32 of', one:'Sed ut perspiciatis unde', two:'sed quia consequuntur', three:'ullam corporis',four:'Qui dolorem '},{title:'Section 1.10.32 of', one:'Sed ut perspiciatis unde', two:'sed quia consequuntur', three:'ullam corporis',four:'Qui dolorem '},].map((i, idx) => (<>
            <Grid2  size={{ xs: 12, sm:4,md:2}} key={idx}>

              <Box sx={{width:'100%', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:{xs:"center",sm:"center",md:'flex-start'}}} key={idx}>
                
                <Typography className={styles.customFont} sx={{fontSize:'18px', fontWeight:700}} color={'#ffffff'} variant='h2'>
                    {i.title}
                </Typography>
                <Typography className={styles.customFont} sx={{fontSize:'12px', fontWeight:400}} color={'#ffffff'} variant='body1'>
                    {i.one}
                </Typography>
                <Typography className={styles.customFont} sx={{fontSize:'12px', fontWeight:400}} color={'#ffffff'} variant='body1'>
                    {i.two}
                </Typography>
                <Typography className={styles.customFont} sx={{fontSize:'12px', fontWeight:400}} color={'#ffffff'} variant='body1'>
                    {i.three}
                </Typography>
                <Typography className={styles.customFont} sx={{fontSize:'12px', fontWeight:400}} color={'#ffffff'} variant='body1'>
                    {i.four}
                </Typography>
              </Box>
            </Grid2>
          </>))
        }

<Grid2
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          sx={{ fontSize: '12px' }}
          size={12}
        >
          <Grid2 sx={{ order: { xs: 2, sm: 1 } }}>
            <Typography sx={{fontSize:'12px', fontWeight:500}} color={'#ffffff'}>© Copyright</Typography>
          </Grid2>
          <Grid2 container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid2>
              <Typography><FacebookOutlined sx={{fontSize:'32px'}}/></Typography>
            </Grid2>
            <Grid2>
              <Typography><Instagram sx={{fontSize:'32px'}}/></Typography>
            </Grid2>
            <Grid2>
              <Typography><LinkedIn sx={{fontSize:'32px'}}/></Typography>
            </Grid2>
          </Grid2>
          </Grid2>
    


      </Grid2>

    
    </Box>
  )
}

export default LandingComponentFooter

