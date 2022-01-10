import { Box, Container, Typography } from '@mui/material'

import React from 'react'
const Footer =()=> {

    return (
            <Container >
               
                     <Box sx={{
                         display:'flex',
                         flexDirection:{
                             md:'row-reverse',
                             xs: 'column'
                         },
                         gap:'50px',
                        py:4,
                     }}>
                     
                        <Box sx={{display:'flex',
                                justifyContent: 'space-around'
                        }}>
                        <Typography 
                            sx={{fontFamily: 'Nunito Sans',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                fontSize: '11.9464px',
                                lineHeight: '16px',
                                textAlign: 'center',
                                marginRight:'26px',
                                color: 'rgba(255, 255, 255, 0.7)',}}
                        >Support</Typography>
                        <Typography  sx={{fontFamily: 'Nunito Sans',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                fontSize: '11.9464px',
                                lineHeight: '16px',
                                textAlign: 'center',
                                marginRight:'26px',
                                color: 'rgba(255, 255, 255, 0.7)',}}> Privacy Policy</Typography>
                        <Typography  sx={{fontFamily: 'Nunito Sans',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                fontSize: '11.9464px',
                                lineHeight: '16px',
                                textAlign: 'center',
                                marginRight:'26px',
                                color: 'rgba(255, 255, 255, 0.7)',}}> Term And Condition</Typography>
                        </Box>
                        <Box>
                        <Typography  sx={{fontFamily: 'Nunito Sans',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                fontSize: '11.9464px',
                                lineHeight: '16px',
                                textAlign: 'center',
                                marginRight:'26px',
                                color: 'rgba(255, 255, 255, 0.7)',}}>© 2020 Enver, All Rights Reserved
                                </Typography>
                       
                       </Box>
                   
                     </Box>
            </Container>
    )
}

export default Footer;