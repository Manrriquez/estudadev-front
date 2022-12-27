import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import MainCard from '../../../components/ui-component/cards/MainCard'

const DeleteAccount = () => {
  return (
    <MainCard>
      <Box sx={{my: 2, textAlign: 'center'}}>
        <Typography component="h2" sx={{fontSize: '24px', my: 2, color: 'secondary.main', fontWeight: 600}}>Deletar conta</Typography>
        <Typography component="p">Aviso: Se encerrar sua conta, você será descadastrado de todos os seus 7 cursos e perderá o acesso para sempre.</Typography>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center', my: 6}}>
      <Button sx={{color: '#FFFFFF', fontWeight: 800}} disableElevation  size="large" type="submit" variant="contained" color="secondary">
              DELETAR CONTA PERMANENTEMENTE
          </Button>
      </Box>
    </MainCard>
  )
}

export default DeleteAccount