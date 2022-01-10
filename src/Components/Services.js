
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
            <Box sx={{
                position: 'relative',
            }}>
                <Box sx={{
                    position: 'absolute',
                    width: '27px',
                    height: '53px',
                    left: { lg: '-50px', xs: '10px' },
                    right: ' 0px',
                    top: { lg: '150px', xs: '180px' },
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
                        left: '4px',
                        right: '-8px',
                        top: '-16px',
                        borderBottom: '3.65476px solid #E7E7E7',
                        transform: 'rotate(30deg)'
                    }
                }}>

                </Box>
                <Box sx={{
                    position: 'absolute',
                    width: '27px',
                    height: '53px',
                    left: { lg: '-45px', md: '-50px', xs: '20px' },
                    right: '0px',
                    top: { lg: '171px', xs: '200px' },
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
                }}>

                </Box>
                <Box sx={{
                    background: 'rgb(255, 255, 255)',
                    height: '38px',
                    position: 'absolute',
                    width: '5px',
                    top: { lg: '220px', xs: '200px' },
                    left: { lg: '1100px', xs: '300px' },
                    borderRadius: '2px',
                    transform: 'rotate(30deg)',
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
                <Typography sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: { lg: '39px', xs: '30px' },
                    color: 'white',
                    paddingBottom: '15px',
                    paddingTop: '120px'
                }}>
                    The Service We Provide
                </Typography>
                <Typography sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: { lg: '39px', xs: '30px' },
                    color: 'white',
                    paddingBottom: '15px',
                    marginTop: '-20px'
                }}>
                    For you
                </Typography>
            </Box>
            <Box sx={{
                marginTop: '64px'
            }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={12} sm={4} md={4}>
                        <Item sx={{ boxShadow: 0 }}>
                            <IntegrationInstructionsIcon sx={{
                                color: '#5454D4',
                                background: 'rgba(84, 84, 212, 0.1)',
                                borderRadius: '50%',
                                padding: '20px'
                            }} fontSize='large'>
                            </IntegrationInstructionsIcon>
                            <Typography variant="h6" gutterBottom sx={{ fontSize: '22px' }}>
                                Development
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '15px' }}>
                                Create a platform with the best and coolest quality from us.
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Item sx={{ boxShadow: 0 }}>
                            <LayersIcon sx={{
                                color: '#F04037',
                                background: 'rgba(240,64,55,0.1)',
                                borderRadius: '50%',
                                padding: '20px',
                            }} fontSize="large">
                            </LayersIcon>
                            <Typography variant='h6' gutterBottom sx={{ fontSize: '22px' }}>
                                UI/UX Designer
                            </Typography>
                            <Typography variant='subtitle1' gutterBottom sx={{ fontSize: '15px' }}>
                                We provide UI/UX Design services, and of course with the best quality
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Item sx={{ boxShadow: 0 }}>
                            <IntegrationInstructionsIcon sx={{
                                color: '#FEDC5A',
                                background: 'rgba(254,220,90,0.1)',
                                borderRadius: '50%',
                                padding: '20px'
                            }} fontSize='large'>
                            </IntegrationInstructionsIcon>
                            <Typography variant='h6' gutterBottom sx={{ fontSize: '22px' }}>
                                Graphik Designer
                            </Typography>
                            <Typography variant='subtitle1' gutterBottom sx={{ fontSize: '15px' }}>
                                We provide Graphic Design services, with the best designer
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Item sx={{ boxShadow: 0 }}>
                            <ViewAgendaIcon sx={{
                                color: '#FEDC5A',
                                background: 'rgba(254,220,90,0.1)',
                                borderRadius: '50%',
                                padding: '20px'
                            }} fontSize='large'>
                            </ViewAgendaIcon>
                            <Typography variant='h6' gutterBottom sx={{ fontSize: '22px' }}>
                                Motion Graphik
                            </Typography>
                            <Typography variant='subtitle1' gutterBottom sx={{ fontSize: '15px' }}>
                                Create a platform with the best and coolest quality from us.
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Item sx={{ boxShadow: 0 }}>
                            <PhotoCameraIcon sx={{
                                color: '#5454D4',
                                background: 'rgba(84,84,212,0.1)',
                                borderRadius: '50%',
                                padding: '20px'
                            }} fontSize='large'>
                            </PhotoCameraIcon>
                            <Typography variant='h6' gutterBottom sx={{ fontSize: '22px' }}>
                                Photography
                            </Typography>
                            <Typography variant='subtitle' gutterbottom sx={{ fontSize: '15px' }}>
                                We provide Photography services, and of course with the best quality
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Item sx={{ boxShadow: 0 }}>
                            <OndemandVideoIcon sx={{
                                color: '#F04037',
                                background: 'rgba(240,64,55,0.1)',
                                borderRadius: '50%',
                                padding: '20px'
                            }} fontSize='large'>
                            </OndemandVideoIcon>
                            <Typography variant='h6' gutterBottom sx={{ fontSize: '22px' }}>
                                Videography
                            </Typography>
                            <Typography variant='subtitle1' gutterBottom sx={{ fontSize: '15px' }}>
                                Create a platform with the best and coolest quality from us.
                            </Typography>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Services;