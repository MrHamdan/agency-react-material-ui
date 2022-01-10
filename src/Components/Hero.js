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
                            fontSize: { lg: '53px', xs: '40px' },
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
                        <Box sx={{
                            position: 'relative',
                            textAlign: 'center',
                            '&::before': {
                                position: 'absolute',
                                content: '" "',
                                border: '1px solid #fff',
                                height: '249px',
                                width: '249px',
                                left: {
                                    md: '77px',
                                    xs: '55px'
                                },
                                bottom: '36px',
                                transform: 'rotate(24deg)',
                                borderRadius: '10px',
                                background: '#5454D4',



                            },
                            '&::after': {
                                content: '""',
                                height: '249px', width: '249px',
                                position: 'absolute',

                                border: '1px solid #fff',
                                left: { md: '50px', xs: '30px', },
                                bottom: '84px',
                                transform: 'rotate(24deg)',
                                borderRadius: '10px',
                                zIndex: '-1'
                            }



                        }}>
                            <Box sx={{
                                border: 'solid rgb(255, 255, 255)',
                                borderWidth: '0 3px 3px 0',
                                display: 'inline-block',
                                padding: '10px',
                                transform: 'rotate(-135deg)',
                                position: 'absolute',
                                left: {
                                    md: '-50px',
                                    xs: '16px'
                                },
                                top: { lg: '20px', md: '-50px', xs: '30px' },
                                '&::before': {
                                    content: '""',
                                    border: 'solid rgb(255, 255, 255)',
                                    borderWidth: '0 3px 3px 0',
                                    display: 'inline-block',
                                    padding: '10px',
                                    position: 'absolute',
                                    left: '-21px',
                                    bottom: '-24px',
                                },
                                '&::after': {
                                    content: '""',
                                    border: 'solid rgb(255, 255, 255)',
                                    borderWidth: '0 0px 3px 0',
                                    display: 'inline-block',
                                    padding: '10px',
                                    position: 'absolute',
                                    left: '20px',
                                    top: '-21px',
                                }
                            }}  >

                            </Box>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    width: '27px',
                                    height: '53px',
                                    left: { lg: '-50px', xs: '10px' },
                                    right: ' 0px',
                                    top: { lg: '350px', xs: '380px' },
                                    borderLeft: '3.65476px solid #E7E7E7',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        width: '53px',
                                        height: '-9.42px',
                                        left: '-7px',
                                        right: '-2px',
                                        top: '38px',
                                        borderTop: '3.65476px solid #E7E7E7',
                                        transform: 'rotate(-32deg)'
                                    },
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        width: '50px',
                                        height: '32.58px',
                                        left: '1px',
                                        right: '-8px',
                                        top: '-16px',
                                        borderBottom: '3.65476px solid #E7E7E7',
                                        transform: 'rotate(30deg)'
                                    }

                                }}

                            ></Box>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    width: '27px',
                                    height: '53px',
                                    left: { lg: '-40px', md: '-50px', xs: '20px' },
                                    right: '0px',
                                    top: { lg: '371px', xs: '400px' },
                                    borderLeft: "1.65476px solid #E7E7E7",
                                    borderRadius: '2px',
                                    transform: 'rotate()',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        width: '51px',
                                        height: '-12.42px',
                                        left: '-5px',
                                        right: '-2px',
                                        top: '39px',
                                        borderTop: '1.65476px solid #E7E7E7',
                                        transform: 'rotate(-30deg)'
                                    },
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        width: '52px',
                                        height: '26.58px',
                                        left: '2px',
                                        right: '-8px',
                                        top: '-11px',
                                        borderBottom: '1.65476px solid #E7E7E7',
                                        transform: 'rotate(30deg)'
                                    }
                                }}
                            >

                            </Box>
                            <Box
                                sx={{
                                    width: '50px',
                                    height: '50px',
                                    border: '3px solid #fff',
                                    borderRadius: '50% ',
                                    position: 'absolute',
                                    fontWeight: 'bold',
                                    left: { lg: '350px', xs: '270px' },
                                    '&::before': {
                                        content: '""',
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        position: 'absolute',
                                        top: '15px',
                                        left: '10px',
                                        border: '3px solid #fff',
                                        opacity: '0.5'
                                    }
                                }}
                            >

                            </Box>
                            <Box
                                sx={{
                                    background: 'rgb(255, 255, 255)',
                                    height: '38px',
                                    position: 'absolute',
                                    width: '5px',
                                    top: '390px',
                                    left: { lg: '370px', xs: '310px' },
                                    borderRadius: '2px',
                                    '&::before': {
                                        background: 'rgb(255, 255, 255)',
                                        content: '""',
                                        height: '5px',
                                        left: '-17px',
                                        position: 'absolute',
                                        top: '16px',
                                        width: '39px',
                                        borderRadius: '2px',
                                    }
                                }}
                            ></Box>
                            <img style={{
                                clipPath: 'polygon(71% -6%, 76% 3%, 98% -8%, 102% 55%, 82% 88%, 74% 101%, 32% 87%, 12% 80%, -3% 54%, 20% 9%)'
                            }} src={person} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Hero;