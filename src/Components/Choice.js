import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import meeting from '../Images/meeting.png';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';




const Choice = () => {
    return (
        <Container sx={{ marginTop: '150px' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} lg={6} md={5}>
                        <Typography sx={{
                            fontWeight: 'bold',
                            fontSize: '40px',
                            color: 'white'
                        }}>Why Enver Is The <br /> Best Choice?</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={5} md={5}>
                        <Typography sx={{
                            fontWeight: 'normal',
                            fontSize: '15px',
                            color: 'white',
                            marginTop: '30px'
                        }}>Watch this one minute video so you understand why you should <br /> use our services!</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{
                textAlign: 'center',
                marginTop: '40px',
                position: 'relative'
            }}>
                <img style={{ width: '100%' }} src={meeting} alt="" />
                <PlayArrowIcon sx={{
                    position: 'absolute',
                    color: '#fff',
                    fontSize: '40px',
                    background: '#5454D4',
                    borderRadius: '50%',
                    padding: '20px',
                    left: '47%',
                    top: '40%',
                    cursor: 'pointer'
                }}>

                </PlayArrowIcon>
            </Box>
        </Container>
    );
};

export default Choice;