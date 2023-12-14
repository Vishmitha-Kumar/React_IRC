import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Account from '@mui/icons-material/AccountCircle'
import { useNavigate } from 'react-router-dom'
import Dog from '@mui/icons-material/Pets'
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
// import { Icon } from '@mui/material';

const pages = ['PetShop', 'Pettraining', 'Adopt'];
function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
  const handleAbout = () => {
    navigate('/about')
  }
  const handleHome = () => {
    navigate('/')
  }
  const handleContact = () => {
    navigate('/contact')
  }
  const modeldata = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius:5,
  }
  return (
    <>
      <AppBar position="fixed" >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Dog sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'cursive',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              PettyPet
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
            </Box>
            <Dog sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'cursive',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              PettyPet
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'end', gap: '1rem', mr: '2rem' } }}>

              <Button onClick={handleHome}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'cursive' }}>
                HOME
              </Button>
              <Button onClick={handleAbout}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'cursive' }}>
                ABOUT
              </Button>
              <Button onClick={handleContact}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'cursive' }}
              >CONTACT
              </Button>

            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Login">
                <IconButton onClick={handleOpen} sx={{ p: 0 }}>
                  <Account sx={{ display: { xs: 'none', md: 'flex' }, ml: 1 }} />
                </IconButton>
              </Tooltip>

            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modeldata}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Login
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2}}>
          <TextField id="standard-basic" label="Username" variant="standard"  sx={{my:1,width:"100%"}}/>
          <TextField id="standard-basic" label="Password" variant="standard"  sx={{my:1,width:"100%"}}/>
          <Button variant="contained"  sx={{my:1,width:"100%"}} >Submit</Button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default Navbar;