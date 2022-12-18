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
import { Badge, Box, Grid, TextField } from '@mui/material';
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
import SendIcon from '@mui/icons-material/Send';

import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

var data = [
  {
    avatar: User,
    text: 'Lorem ipsum lorem let..',
    name: "Fulano Silva",
    status: "success",
    dateMessage: "Hoje",
    numbersNotification: 4,
  },

  {
    avatar: User,
    text: 'Lorem ipsum lorem let..',
    name: "Fulano Silva",
    status: "warning",
    dateMessage: "Hoje",
    numbersNotification: 4,
  },

  {
    avatar: User,
    text: 'Lorem ipsum lorem let..',
    name: "Fulano Silva",
    status: "success",
    dateMessage: "Hoje",
    numbersNotification: 4,
  },

  {
    avatar: User,
    text: 'Lorem ipsum lorem let..',
    name: "Fulano Silva",
    status: "success",
    dateMessage: "Hoje",
    numbersNotification: 4,
  },

  {
    avatar: User,
    text: 'Lorem ipsum lorem let..',
    name: "Fulano Silva",
    status: "success",
    dateMessage: "Hoje",
    numbersNotification: 4,
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

      <Grid item md={4} xs={12}>
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
                PaperProps={{ elevation: 0, sx: {
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

            {data.map((item) => (
              <Box mt={3}  sx={{ p: 1, borderRadius: '12px',
                '&:hover': { backgroundColor: 'secondary.200', color: '#FFFFFF', transition: '0.7s', cursor: 'pointer' }}}>
                <StyledCardHeader avatar={
                    <Badge color={item.status} overlap="circular" variant="dot" badgeContent="" anchorOrigin={{vertical: 'bottom', horizontal: 'right',}}>
                        <Avatar alt="Fulano" src={item.avatar} />
                    </Badge>
                  } 
                  action={
                    <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                      <Typography component="p" sx={{fontSize: '12px', fontWeight: 400, mb: 1}}>{item.dateMessage}</Typography>
                      <Avatar sx={{color: '#FFFFFF',width: '24px', height: '23px', fontSize: '11px', backgroundColor: '#00e676'}}>{item.numbersNotification}</Avatar>
                    </Box>
                  } subheader={item.text} title={item.name}/>
              </Box>
            ))}
            
          </Card>
        </MainCard>
      </Grid>

      <Grid item md={8} xs={12}>
        <MainCard>
        <Card sx={{ width: '100%'}}>
            <StyledCardHeader sx={{borderBottom: '1px solid #00000033', mb: 3, paddingBottom: '15px!important'}} avatar={
              <Badge color="success" overlap="circular" variant="dot" badgeContent="" 
              anchorOrigin={{vertical: 'bottom', horizontal: 'right',}}>
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

                title="Lucas Inacio"
                subheader="Online há 2 horas atras.."
              />
              <Menu anchorEl={anchorEl} id="account-menu" open={open} onClose={handleClose} onClick={handleClose}
                PaperProps={{ elevation: 0, sx: {
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
                <Box sx={{width:'100%', display: 'flex', justifyContent: 'start'}}>
                  <Box sx={{backgroundColor: 'primary.light', borderRadius: '12px', px: 3, py: 2, width: 'max-content', mt: 3}}>
                      <Typography component="h5">Lorem Ipsum let?</Typography>
                      <Typography component="p" sx={{textAlign: 'end', mt: 2, fontSize: '12px'}}>11:23 AM</Typography>
                  </Box>
                </Box>

                <Box sx={{width:'100%', display: 'flex', justifyContent: 'end'}}>
                  <Box sx={{backgroundColor: 'secondary.light', borderRadius: '12px', px: 3, py: 2, mt: 2, width: 'max-content',}}>
                      <Typography component="h5">Lorem Ipsum let amo lore ipsum!</Typography>
                      <Typography component="p" sx={{textAlign: 'end', mt: 2, fontSize: '12px'}}>11:23 AM</Typography>
                  </Box>
                </Box>

                <Box sx={{width:'100%', display: 'flex', justifyContent: 'start'}}>
                  <Box sx={{backgroundColor: 'primary.light', borderRadius: '12px', px: 3, py: 2, width: 'max-content', mt: 3}}>
                      <Typography component="h5">Lorem Ipsum let?</Typography>
                      <Typography component="p" sx={{textAlign: 'end', mt: 2, fontSize: '12px'}}>11:23 AM</Typography>
                  </Box>
                </Box>

                <Box sx={{width:'100%', display: 'flex', justifyContent: 'end'}}>
                  <Box sx={{backgroundColor: 'secondary.light', borderRadius: '12px', px: 3, py: 2, mt: 2, width: 'max-content',}}>
                      <Typography component="h5">Lorem Ipsum let amo lore ipsum!</Typography>
                      <Typography component="p" sx={{textAlign: 'end', mt: 2, fontSize: '12px'}}>11:23 AM</Typography>
                  </Box>
                </Box>

                <Box sx={{width: '100%', mt: 5, display: 'flex', gap: '2px', alignItems: 'center'}}>
                <IconButton size="medium">
                    <SentimentVerySatisfiedIcon fontSize="inherit" />
                  </IconButton>
                  <TextField id="outlined-basic" label="Enviar Mensagem" variant="outlined" fullWidth/>
                  <IconButton size="medium">
                    <SendIcon fontSize="inherit" />
                  </IconButton>
                </Box>
                
            </Box>
          </Card>
        </MainCard>
      </Grid>
    </Grid>
  )
}

export default MessageTeacher;