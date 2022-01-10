import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';


const Contact = () => {
    return (
        <Box sx={{
            marginTop: '250px',
            padding: '154px 0',
            background: 'rgba(30, 30, 32, 0.5)',
            position: 'relative',
        }}>
            <Box sx={{
                background: 'rgb(255, 255, 255)',
                height: '38px',
                position: 'absolute',
                width: '5px',
                top: { lg: '70px', xs: '20px' },
                right: { lg: '100px', xs: '50px' },
                borderRadius: '2px',
                transform: 'rotate()',
                '&::after': {
                    background: ' rgb(255, 255, 255)',
                    content: '""',
                    height: '5px',
                    left: '-17px',
                    position: 'absolute',
                    top: '16px',
                    width: '39px',
                    borderRadius: '2px',
                }
            }}>

            </Box>
            <Box sx={{
                width: '50px',
                height: '50px',
                border: '3px solid #fff',
                borderRadius: '50% ',
                position: 'absolute',
                fontWeight: 'bold',
                left: { lg: '30px', xs: '20px' },
                top: { lg: '280px', xs: '410px' },
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
            }}>

            </Box>
            <Container>
                <Grid container spacing={2}>
                    <Grid xs={12} sm={12} md={7}>
                        <Typography variant='h3'
                            sx={{
                                fontSize: '39.8214px',
                                fontWeight: 'bold',
                                color: '#fff',
                                lineHeight: '53px',


                            }}
                        >
                            Contact us for the service <br /> you want to use
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={12} md={3}
                        sx={{
                            marginLeft: '120px'
                        }}>
                        <Button
                            sx={
                                {
                                    color: '#fff',
                                    fontSize: '13px',
                                    border: '1px solid #5454D4',
                                    px: 3,
                                    background: '#5454D4',
                                    fontWeight: '400',
                                    marginTop: '30px',
                                    marginLeft: '80px'
                                }}
                        >Contact us</Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;