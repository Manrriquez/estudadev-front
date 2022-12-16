import React from 'react'
import MainCard from '../../../components/ui-component/cards/MainCard';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Badge, Box, Grid } from '@mui/material';
import User from '../../../assets/img/user-round.svg'
import styled from '@emotion/styled';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import SearchSection from '../../../components/Header/SearchSection';

var data = [
  {
    avatar: User,
    name: "Fulano Silva",
    status: "success",
  },

]

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({

  padding: 8,

  "span": {
    fontSize: '14px!important'
  }

}));


const MessageTeacher = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    
    <Grid container spacing={2} component="section">

      <Grid item md={5} xs={12}>
        <MainCard>
        <Card sx={{ width: '100%'}}>
          <StyledCardHeader avatar={
            <Badge color="success" overlap="circular" variant="dot" badgeContent="" anchorOrigin={{vertical: 'bottom', horizontal: 'right',}}>
              <Avatar alt="Fulano" src={User} />
            </Badge>
            } 
            action={
              <IconButton aria-label="settings" onClick={handleClick}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}>
                <MoreVertIcon />
              </IconButton>
            }

              title="Shrimp and Chorizo Paella"
            />
            <Menu anchorEl={anchorEl} id="account-menu" open={open} onClose={handleClose} onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
            <MenuItem>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>

          <Box>
            <SearchSection />
          </Box>
          <Box mt={3}  sx={{'&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        }}}>
            <StyledCardHeader avatar={
              <Badge color="success" overlap="circular" variant="dot" badgeContent="" anchorOrigin={{vertical: 'bottom', horizontal: 'right',}}>
                <Avatar alt="Fulano" src={User} />
              </Badge>
              } 
              action={
                <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                  <Typography component="p" sx={{fontSize: '12px', fontWeight: 400, mb: 1}}>Ontem</Typography>
                  <Avatar color="success" sx={{width: '24px', height: '23px', fontSize: '11px'}}>2</Avatar>
                </Box>
              }
              
              subheader="Lorem ipsum lorem let.."
             title="Shrimp and Chorizo Paella"
              />
          </Box>
        </Card>


        </MainCard>
      </Grid>

      <Grid item md={7} xs={12}>
        <MainCard>
            aaaaa
        </MainCard>
      </Grid>
    </Grid>
  )
}

export default MessageTeacher;