'use client'
import styled from '@emotion/styled'
import { Box, Grid2, } from '@mui/material'
import React from 'react'




const Count = styled.p`

font-size: 40px;
color:#631e5f;
font-weight:700

`
const CountTitle = styled.p`

font-size: 20px;
color:#4e034a;
font-weight:500;

`

const Counts = [
    {
        value: 85,
        title: "Physician"
    },
    {
        value: 110,
        title: "Staff Members"
    },
    {
        value: 200,
        title: "Hospital Beds"
    },
]

const CountsComp = () => {
    return (<>

        <Box sx={{
            flexGrow: 1, backgroundImage: 'url("/logo/lb.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:{xs:'left' ,sm:'center'}, minHeight: '100px'
        }} >
            <Grid2 container  maxWidth={'lg'} margin={'auto'} p={{ xs: 2, md: 2 }}
                sx={{ display: 'flex', justifyContent: 'space-between', height: '100%', alignContent: 'space-around' }}
                spacing={2}>
                {Counts.map((item, index) => (
                    <Grid2  size={{xs:12, sm:4, md:4}} key={index} component={'div'}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                            <Count>
                                {`${item.value}+`}
                            </Count>
                            <CountTitle>
                                {item.title}
                            </CountTitle>
                        </Box>
                    </Grid2>
                ))}
            </Grid2>
        </Box>


    </>
    )
}

export default CountsComp

