import { ArrowRight } from '@mui/icons-material'
import { Box, Button, Container,  Grid2, Typography } from '@mui/material'
import React from 'react'

const HeroSectionLandingPage = () => {
  return (
    <Box
    sx={{
        width:"100%",
      minHeight: { xs: '60vh', md: '80vh' }, // Responsive height for different screen sizes
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'url("/logo/hrt.jpg")', // Set a background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      textAlign: 'center',
      padding: { xs: 2, md: 4 },
    }}
  >
    <Container maxWidth="lg">
      <Grid2 container spacing={2} justifyContent="center">
        <Grid2  size={{xs:12, md:8}} pt={{xs:10,md:0}}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Welcome to Our Website
          </Typography>
          <Typography variant="h6" component="p" gutterBottom sx={{ marginBottom: 3 }}>
            Your one-stop solution for all things amazing.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="#"
            sx={{
              padding: '12px 24px',
              fontSize: '16px',
              borderRadius: '8px',
              textTransform: 'none',
            }}
            endIcon={<ArrowRight/>}
          >
            Make an Appointment
          </Button>
        </Grid2>
      </Grid2>
    </Container>
  </Box>
  )
}

export default HeroSectionLandingPage

