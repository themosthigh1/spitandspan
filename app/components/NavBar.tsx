'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import Logo from '../../public/Spit&Span.png'
import Link from 'next/link';
import { ButtonBase } from '@mui/material';

const pages = [
    {label: 'About', link: '/about'},
    {label: 'Services', link: '/services'},
    {label: 'Contact', link: '/contact'}
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const logo = <Link href={'/'}><Image src={Logo} alt='Spit and Span Logo' height={70} width={70}/></Link>

  return (
    <AppBar position="static" sx={{backgroundColor: 'white'}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
        <Box mt={1} mb={0.5} component="div" sx={{display: { xs: 'none', md: 'flex' }}} >
         {logo}
         </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
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
                display: { xs: 'block', md: 'none' }, color: "black"
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                    <Link href={page.link}>
                        <Typography   
                            textAlign="center"
                            color={'black'}
                        >
                          {page.label}
                        </Typography>
                    </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            component="div"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}
          >
            {logo}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button key={page.label} onClick={handleCloseNavMenu}>
            <Link href={page.link}>
                <Typography   
                    textAlign="center"
                    color={'black'}
                >{page.label}
                </Typography>
            </Link>
            </Button>
          ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
