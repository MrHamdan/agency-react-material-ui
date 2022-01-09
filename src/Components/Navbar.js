import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Home', 'Services', 'Our Projects', 'About Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: "#19191B", boxShadow: 0 }}>
                <Container>
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ fontFamily: 'Montserrat', mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            Agency
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{
                                fontFamily: 'Montserrat',
                                flexGrow: 1,
                                display: { xs: 'flex', md: 'none' }
                            }}
                        >
                            Agency
                        </Typography>
                        <Box sx={{
                            marginLeft: 30,
                            gap: 5,
                            color: 'black',
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' }
                        }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        fontWeight: 'normal',
                                        my: 2,
                                        color: 'white',
                                        display: 'block', '&:first-child': {
                                            color: '#5454D4',
                                        },
                                        '&:nth-child(2)': {
                                            '&:hover': {
                                                color: '#5454D4',
                                            }
                                        },
                                        '&:nth-child(3)': {
                                            '&:hover': {
                                                color: '#5454D4',
                                            }
                                        },
                                        '&:last-child': {
                                            '&:hover': {
                                                color: '#5454D4',
                                            }
                                        }
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Button variant="outlined" sx={{
                            color: "#ffff",
                            borderColor: "white", '&:hover': {
                                backgroundColor: "#5454D4;",
                            }
                        }}>Contact Us</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </div >
    );
};

export default Navbar;