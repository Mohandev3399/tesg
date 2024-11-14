import {  Button, List, ListItem, ListItemText } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const LandingComponentTop = () => {
  return (
    <div className='addresstop'>
    
       
        <List sx={{display:'flex'}}>
        {["Chennai","+91-12345 67890"].map((text) => (
          <ListItem  key={text} component={Link} href={`/${text.toLowerCase()}`}>
            <ListItemText primary={text} style={{textTransform:"none", color:"#000"}}/>
          </ListItem>
        ))}
        <ListItem  component={Link} href={`/`}>
           <Button sx={{background:"#104b5f", color:"#fff"}}>My Account</Button>
          </ListItem>
      </List>
     
       
     
    </div>
  )
}

export default LandingComponentTop

