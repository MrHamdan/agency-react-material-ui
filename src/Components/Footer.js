import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Container>
            <Box>
                <Grid>
                    <Typography sx={{ color: 'white' }}>
                        Footer
                    </Typography>
                </Grid>
            </Box>
        </Container>
    );
};

export default Footer;