import * as React from 'react';
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
import AdbIcon from '@mui/icons-material/Adb';
import { styled, ThemeProvider } from '@mui/material/styles';
import Logotype from '../../assets/img/LOGOTYPE.svg'


const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#ffff',
    color: 'black',
    boxShadow: '0px 0px 4px -1px rgba(0, 0, 0, 0.05),0px 2px 2px 0px rgba(0, 0, 0, 0.01),0px 1px 2px 0px rgba(0, 0, 0, 0.03)'
}));

const pages = ['Products', 'Pricing', 'Blog'];

function Navbar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <StyledAppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{display: "flex", justifyContent: "space-between"}}>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <Typography variant="h6" noWrap component="a" color="primary"
              href="/" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 700,
              letterSpacing: '.3rem', textDecoration: 'none',}}>
                <img  src={Logotype} />
            </Typography>
          </Box>

          <Typography variant="h5" noWrap component="a" href=""
            sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1, fontFamily: 'monospace',
              fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none', }}>
            LOGO
          </Typography>

          {/* MENU DESKTOP*/}
          <Box sx={{display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Typography variant="subtitle1"  noWrap component="a" key={page} onClick={handleCloseNavMenu} href="#" 
                sx={{ my: 2, display: 'block', mx: 2 }}>
                  {page}
                </Typography>
              ))}
            </Box>


          {/* MENU MOBILE */}
          <Box sx={{display: { xs: 'flex', md: 'none' }, justifyContent: 'end' }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar"
              aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>

            <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{vertical: 'bottom',horizontal: 'left',}}
              keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left',}}
              open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{display: { xs: 'block', md: 'none'},}}>

              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} color="primary">
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}
export default Navbar;