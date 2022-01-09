import { Box, Button, Grid, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import React from 'react';
import person from '../Images/men.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
    return (
        <Container maxWidth="lg" sx={{ paddingTop: '98px' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{
                    '@media(max-width: 768': {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }
                }}>
                    <Grid item xs={12} sm={12} lg={8} md={5}>
                        <Typography sx={{
                            fontWeight: 'bold',
                            fontSize: '53px',
                            color: 'white',
                            paddingBottom: '15px',
                            paddingTop: '20px',
                            lineHeight: '1.2'
                        }}>Build Your <br /> Awesome <br /> Platform</Typography>
                        <Typography sx={{ fontWeight: 'normal', fontSize: '18px', color: 'white' }}>Enver studio is a digital studio that offers several services <br /> such as UI/UX Design to developers, we will provide the best <br /> service for those of you who use our services.</Typography>
                        <Button variant="contained" sx={{
                            marginTop: '30px',
                            backgroundColor: '#5454D4',
                            padding: '10px 20px', '&:hover': {
                                backgroundColor: '#5254D4',
                            }
                        }}>Our Services <ArrowForwardIcon sx={{ transform: 'rotate(-35deg)', margin: '0px 3px' }} /> </Button>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4} md={6} >
                        <Box>
                            <img src={person} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Hero;