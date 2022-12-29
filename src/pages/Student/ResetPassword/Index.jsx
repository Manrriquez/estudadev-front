import React from 'react'
import MainCard from '../../../components/ui-component/cards/MainCard';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
  useMediaQuery
} from '@mui/material';



const ResetPassword = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <MainCard>
      <Box sx={{my: 2, textAlign: 'center'}}>
        <Typography component="h2" sx={{fontSize: '24px', my: 2, color: 'secondary.main', fontWeight: 600}}>Trocar senha</Typography>
      </Box>
      <Box>
        <form>
            <Grid container spacing={matchDownSM ? 0 : 2}>

              <Grid item xs={12} sm={6} sx={{my: 1}}>
                <TextField fullWidth label="Nome" color="secondary" name="fname" type="text"  defaultValue=""/>
              </Grid>

              <Grid item xs={12} sm={6} sx={{my: 1}}>
                <TextField fullWidth label="Sobrenome" color="secondary"  name="lname" type="text" defaultValue=""/>
              </Grid>
            </Grid>
            
            <FormControl fullWidth sx={{my: 1}}>
                <TextField fullWidth label="E-mail" color="secondary" name="fname" type="email"  defaultValue=""/>
            </FormControl>

            <FormControl fullWidth sx={{my: 1}}>
                <TextField fullWidth label="Senha" color="secondary" name="fname" type="password"  defaultValue=""/>
            </FormControl>

            <Box sx={{ my: 1 }}>
              <Button sx={{color: '#FFFFFF', fontWeight: 800}} disableElevation fullWidth size="large" type="submit"variant="contained" color="secondary">
                  TROCAR SENHA
              </Button>
            </Box>
        </form>
      </Box>
    </MainCard>
  )
}

export default ResetPassword;