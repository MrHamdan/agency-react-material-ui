import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import portfolioOne from '../Images/portfolio-one.png';
import portfolioTwo from '../Images/portfolio-two.png';
import portfolioThree from '../Images/portfolio-three.png';

const Portfolio = () => {
    return (
        <Container sx={{ marginTop: '131px' }}>
            <Typography sx={{
                fontWeight: 'bold',
                fontSize: '40px',
                color: 'white',
                paddingBottom: '15px',
                paddingTop: '20px',
                lineHeight: '1.2'
            }}>
                Our Awesome Portfolio
            </Typography>
            <Box sx={{ textAlign: 'center', marginTop: '61px' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={12} sm={4} md={4} sx={{ padding: '40px' }}>
                        <img style={{ width: '100%', backgroundColor: '#1E1E20', padding: '20px', borderRadius: '20px' }} src={portfolioOne} alt="" />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} sx={{ marginTop: '50px', padding: '40px' }}>
                        <img style={{ width: '100%', backgroundColor: '#1E1E20', padding: '20px', borderRadius: '20px' }} src={portfolioTwo} alt="" />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} sx={{ marginTop: '100px', padding: '40px' }}>
                        <img style={{ width: '100%', backgroundColor: '#1E1E20', padding: '20px', borderRadius: '20px' }} src={portfolioThree} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Portfolio;