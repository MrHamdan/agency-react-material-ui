import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Contact = () => {
    return (
        <Container sx={{ marginTop: '165px' }}>
            <Box sx={{ display: 'flex', background: 'rgba(30, 30, 32, 0.5)' }}>
                <Grid item xs={12} sm={6} md={6}>
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: '39px',
                        color: 'white',
                        paddingBottom: '15px',
                        paddingTop: '20px',
                        lineHeight: '1.2'
                    }}>
                        Contact us for the service you want to use
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} sx={{ textAlign: 'center' }}>
                    <Button variant="contained" sx={{
                        marginTop: '30px',
                        backgroundColor: '#5454D4',
                        padding: '10px 20px', '&:hover': {
                            backgroundColor: '#5254D4',
                        }
                    }}>Contact Us </Button>
                </Grid>
            </Box>
        </Container>
    );
};

export default Contact;