import styled from '@emotion/styled';
import { Box, Button, Card, CardContent, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import AnimateButton from '../../../components/ui-component/extended/AnimateButton';




const StyledBoxCard = styled(Box)(({ theme }) => ({
    padding: '25px 15px',
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    width: '100%',
    height: 'auto',
}));

const CardStyle = styled(Card)(({ theme }) => ({
  background: theme.palette.secondary.light,
  borderRadius: '12px',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
      content: '""',
      position: 'absolute',
      width: '200px',
      height: '200px',
      border: '19px solid ',
      borderColor: theme.palette.secondary.main,
      borderRadius: '50%',
      top: '65px',
      right: '-150px'
  },
  '&:before': {
      content: '""',
      position: 'absolute',
      width: '200px',
      height: '200px',
      border: '3px solid ',
      borderColor: theme.palette.secondary.main,
      borderRadius: '50%',
      top: '145px',
      right: '-70px'
  }
}));


const StudenDashboard = () => {
  return (
    <Container component="section">
      <Grid mb={4} container justifyContent="center" alignItems="center" spacing={{ xs: 2, md: 3 }}
       columnSpacing={{ xs: 1, sm: 3, md: 4 }}>

        <Grid item xs={12} lg={3}>
          <StyledBoxCard elevation={3}>
              <Typography mb={1} sx={{fontSize: '13px', fontWeight: 700}}>TOTAL DE CURSOS:</Typography>
              <Typography color="secondary" sx={{fontSize: '50px', fontWeight: 700}}>05</Typography>
              <Typography mb={1} sx={{fontSize: '13px', fontWeight: 700}}>CURSOS MATRICULADO</Typography>
          </StyledBoxCard>
        </Grid>
        <Grid item xs={12} lg={3}>
        <StyledBoxCard>
          <Typography mb={1} sx={{fontSize: '13px', fontWeight: 700}}>TOTAL DE CURSOS:</Typography>
          <Typography color="secondary" sx={{fontSize: '50px', fontWeight: 700}}>05</Typography>
          <Typography mb={1} sx={{fontSize: '13px', fontWeight: 700}}>CURSOS MATRICULADO</Typography>
        </StyledBoxCard>
        </Grid>
        <Grid item xs={12} lg={3}>
        <StyledBoxCard>
         <Typography mb={1} sx={{fontSize: '13px', fontWeight: 700}}>TOTAL DE CURSOS:</Typography>
              <Typography color="secondary" sx={{fontSize: '50px', fontWeight: 700}}>05</Typography>
              <Typography mb={1} sx={{fontSize: '13px', fontWeight: 700}}>CURSOS MATRICULADO</Typography>
        </StyledBoxCard>
        </Grid>
        <Grid item xs={12} lg={3}>
        <StyledBoxCard>
        <Typography mb={1} sx={{fontSize: '13px', fontWeight: 700}}>TOTAL DE CURSOS:</Typography>
              <Typography color="secondary" sx={{fontSize: '50px', fontWeight: 700}}>05</Typography>
              <Typography mb={1} sx={{fontSize: '13px', fontWeight: 700}}>CURSOS MATRICULADO</Typography>
        </StyledBoxCard>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" spacing={{xs: 1, md: 2}}>
        <Grid item xs={12} lg={7}>
          <StyledBoxCard>
            <Typography mb={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, deleniti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius officiis perferendis maiores modi in illum nobis, earum voluptate nihil placeat.</Typography>
            <AnimateButton>
                        <Button variant="contained" color="secondary" sx={{ boxShadow: 'none', color: '#ffffff' }}>
                          ASSINAR PLANO INDIVIDUAL
                        </Button>
                      </AnimateButton>
          </StyledBoxCard>
        </Grid>
        <Grid item xs={12} lg={5}>
          <CardStyle>
            <CardContent>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Typography variant="h4">Upgrade your plan</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2" color="grey.900" sx={{ opacity: 0.6 }}>
                    70% discount for 1 years <br />
                    subscriptions.
                  </Typography>
                </Grid>
                <Grid item>
                  <Stack direction="row">
                    <AnimateButton>
                        <Button variant="contained" color="secondary" sx={{ boxShadow: 'none', color: '#ffffff' }}>
                          Go Premium
                        </Button>
                      </AnimateButton>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </CardStyle>
        </Grid>
      </Grid>
    </Container>
  )
}

export default StudenDashboard;