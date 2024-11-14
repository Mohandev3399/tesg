'use client'
import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography} from '@mui/material'

import MenuIcon from "@mui/icons-material/Menu";
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image';
import styles from "../../../src/app/page.module.css";

const LandingComponentHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const toggleDrawer = (open:boolean)=>(event:Event) =>{
    if(event.type === 'keyDown' || event.type === 'Tab'|| event.type === 'Shift'){
      return
    }
    setDrawerOpen(open)
  }

  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const navItems = [
    { label: 'HOME', content: 'Home Panel Content' },
    { label: 'ABOUT', content: 'About Panel Content' },
    { label: 'SERVICES', content: 'Services Panel Content' },
    { label: 'CONTACT', content: 'Contact Panel Content' },
  ];

  const drawerContent = (
    <Box 
    component={'div'}
      sx={{ width: 250 }}
      role="presentation"
      onClick={()=>toggleDrawer(false)}
      onKeyDown={()=>toggleDrawer(false)}
    >
      <List>
        {["Home", "About", "Services", "Contact"].map((text) => (
          <ListItem  key={text} component={Link} href={`/${text.toLowerCase()}`}>
            <ListItemText primary={text} style={{textTransform:"none"}}/>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
 <>
  
 <AppBar>
  <Toolbar sx={{backgroundColor:"#fff", height:'100%', display:'flex', alignItems:'baseline', minHeight:'100% !important'}}>
  <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, justifyContent:'flex-end' , width:'100%'}}>
          {["London", "+91- 12345 67890"].map((text) => (
            <Button key={text} className={`${styles.customFont} ${styles.lightclrfnt}`}  component={Link} href={`/${text.toLowerCase()}`} style={{  fontSize:'12px', paddingBottom:'0px', color:"#1B7D9E"}}>
              {text}
            </Button>
          ))}
           <Button  className={styles.customFont} component={Link} href={`/`} style={{textTransform:"uppercase", backgroundColor:"#104b5f", color:"#ffffff", fontSize:'12px', borderRadius:'0px', paddingBottom:'0px'}}>
              My Account
            </Button>
        </Box>
  </Toolbar>

  <Toolbar sx={{backgroundColor:"#fff"}}>


  <Typography variant="h6" sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} className={styles.customFont}>
          <Link href="/" style={{  textDecoration: 'none' }}>
         <Image src={"/logo/test.jpg"} width={"150"} height={"25"} alt="test"/>
          </Link>
        </Typography>


        <Box display="flex" gap={4} position="relative">
      {navItems.map((item, index) => (
        <Box
          key={item.label}
          onMouseEnter={() => setHoveredItem(index)}
          onMouseLeave={() => setHoveredItem(null)}
          position="relative"
          sx={{display:{xs:'none',md:'block'}}}
        >
          {/* Navigation Link */}
          <Typography  style={{textTransform:"uppercase",  fontSize:'14px', fontWeight:700, color:"#034f5b",cursor:'pointer'}} className={`${styles.customFont } ${styles.drkclrfnt}`} >
            {item.label}
          </Typography>

          {/* Floating Panel */}
          {hoveredItem === index && (
            <Box
              position="absolute"
              top="30px"
              left="0"
              width="200px"
              p={2}
              bgcolor="#f9f9f9"
              border="1px solid #ddd"
              borderRadius="4px"
              boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
              sx={{
                opacity: 0,
                visibility: 'hidden',
                transform: 'translateY(10px)',
                transition: 'opacity 0.3s ease, transform 0.3s ease, visibility 0.3s',
                ...(hoveredItem === index && {
                  opacity: 1,
                  visibility: 'visible',
                  transform: 'translateY(0)',
                }),
              }}
            >
              <Typography  style={{textTransform:"uppercase",  fontSize:'14px', fontWeight:700, color:"#104B5F"}} className={`${styles.customFont } ${styles.drkclrfnt}`}>{item.content}</Typography>
            </Box>
          )}
        </Box>
      ))}
    </Box>
        <Box sx={{ display: { xs: "flex", md: "none" }, gap: 2 , justifyContent:'space-between', alignItems:'center', width:'100%'}}>
        <IconButton
        
          aria-label="open drawer"
          edge="start"
          onClick={()=>toggleDrawer(true)}
          sx={{ display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent:'flex-end' }}>
          <Link href="/Dashboard" style={{textDecoration: 'uppercase' }}>Logo</Link>
        </Typography>
</Box>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          {drawerContent}
        </Drawer>

  
  </Toolbar>
 </AppBar>
 </>
  )
}

export default LandingComponentHeader
