import { Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { experimentalStyled as styled } from '@mui/material/styles';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import LayersIcon from '@mui/icons-material/Layers';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

const Services = () => {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: '#19191B',
        color: '#fff',
    }));

    return (
        <Container>
            <Typography sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '39px',
                color: 'white',
                paddingBottom: '15px',
                paddingTop: '120px'
            }}>The Service We Provide
            </Typography>
            <Typography sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '39px',
                color: 'white',
                paddingBottom: '15px',
                marginTop: '-20px'
            }}>For You</Typography>
            <Box sx={{ marginTop: '64px' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Grid item xs={12} sm={4} md={4}>
                        <Item>
                            <DeveloperModeIcon sx={{
                                color: '#5454D4',
                                background: 'rgba(84, 84, 212, 0.1)',
                                borderRadius: '50%',
                                padding: '20px'
                            }} fontSize="large" />
                            <Typography variant="h6" gutterBottom sx={{ fontSize: '22px' }}>Development</Typography>
                            <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '15px' }}>Create a platform with the best and coolest quality from us.</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Item>
                            <LayersIcon sx={{
                                color: '#F04037',
                                background: 'rgba(240, 64, 55, 0.1)',
                                borderRadius: '50%',
                                padding: '20px'
                            }} fontSize="large" />
                            <Typography variant="h6" gutterBottom sx={{ fontSize: '22px' }}>UI/UX Desiner</Typography>
                            <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '15px' }}>We provide UI/UX Design services, and of course with the best quality</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Item>
                            <IntegrationInstructionsIcon sx={{
                                color: '#FEDC5A',
                                background: 'rgba(254, 220, 90, 0.1)',
                                borderRadius: '50%',
                                padding: '20px'
                            }} fontSize="large" />
                            <Typography variant="h6" gutterBottom sx={{ fontSize: '22px' }}>Graphik Desiner</Typography>
                            <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '15px' }}>We provide Graphic Design services, with the best designers</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Item>
                            <ViewAgendaIcon sx={{
                                color: '#FEDC5A',
                                background: 'rgba(254, 220, 90, 0.1)',
                                borderRadius: '50%',
                                padding: '20px'
                            }} fontSize="large" />
                            <Typography variant="h6" gutterBottom sx={{ fontSize: '22px' }}>Motion Graphik</Typography>
                            <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '15px' }}>Create a platform with the best and coolest quality from us.</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Item>
                            <PhotoCameraIcon sx={{
                                color: '#5454D4',
                                background: 'rgba(84, 84, 212, 0.1)',
                                borderRadius: '50%',
                                padding: '20px'
                            }} fontSize="large" />
                            <Typography variant="h6" gutterBottom sx={{ fontSize: '22px' }}>Photography</Typography>
                            <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '15px' }}>We provide Photography services, with the best quality</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Item>
                            <OndemandVideoIcon sx={{
                                color: '#F04037',
                                background: 'rgba(240, 64, 55, 0.1)',
                                borderRadius: '50%',
                                padding: '20px'
                            }} fontSize="large" />
                            <Typography variant="h6" gutterBottom sx={{ fontSize: '22px' }}>Videography</Typography>
                            <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '15px' }}>Create a platform with the best and coolest quality from us.</Typography>
                        </Item>
                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
}
export default Services;