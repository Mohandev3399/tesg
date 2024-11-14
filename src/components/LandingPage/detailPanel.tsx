'use client'
import React from 'react'
import CardComponent from './Cards'
import { Box, Grid2 } from '@mui/material'


const cardData = [{
  title: "FIND A DOCTOR",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  icon: "🩺",
  color: "#d6b4d7"
},
{
  title: "TEST RESULTS",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  icon: "🧪",
  color: "#70929c",

},
{
  title: "ONLINE ADMISSION",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  icon: " 🏥",
  color: "#75bbd4"
}

]
const DetailsPanel = () => {
  return (<>

    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container maxWidth={'lg'} margin={'auto'} spacing={4} p={{xs:2,md:2}}>
        {
          cardData.map((card, i) => (
            <Grid2  size={{ xs: 12,sm:4, md:4 }} key={i} >

              <CardComponent
                key={i}
                icon={card.icon}
                title={card.title}
                description={card.description}
                colorValue={card.color}
              />
            </Grid2>

          ))
        }


      </Grid2>

    </Box>


  </>
   
  )
}

export default DetailsPanel

