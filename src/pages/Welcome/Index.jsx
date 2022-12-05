import styled from '@emotion/styled';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import Navbar from '../../components/Navbar/Index';
import ProgramingHome from '../../_assets/img/programing-home.svg';
import JavaIcon from '../../_assets/img/java.svg'


const StyledTypograpyTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 500,
    fontSize: 'clamp(30px, 3vw, 40px)',
    color: '#0B132A',
    lineHeight: '40px',
}));

const StyledTypograpyDescription = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: 'clamp(18px, 3vw, 20px)',
  color: '#4F5665',
  lineHeight: '27px',
}));

const StyledBoxBackground = styled(Box)(({ theme }) => ({
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundImage: `url(${ProgramingHome})`,
    height: '20rem',
    [theme.breakpoints.up('md')]: {
      backgroundSize: 'contain',
      backgroundPosition: 'center',
    },
}));

const StyledAvatarAnimation = styled(Avatar)(({ theme }) => ({
    position: 'relative',
    padding: '10px 15px 10px 15px',
    borderRadius: '8px',
    width: '30px',
    background: '#FFFFFF',
    border: '1px solid #D9D9D9',
    boxShadow: '0px 4px 40px rgb(9 9 12 / 10%)',
}));


const Welcome = () => {
  return (
    <>
      <Navbar />
      <Container sx={{marginTop: 5}} component="main" maxWidth="lg">
          <Box component="section">
              <Grid container spacing={2} sx={{alignItems: 'center'}}>
                  <Grid item  sm={12}  xs={12} md={7}>
                    <Box>
                        <StyledTypograpyTitle component="h1">
                          Lorem ipsum dolor sit amet accusamus quaerat iusto accusantium.
                        </StyledTypograpyTitle>
                        <StyledTypograpyDescription component="p">
                        Lorem ipsum dolor sit amet accusamus quaerat iusto accusantium.
                      </StyledTypograpyDescription>
                    </Box>
                  </Grid>

                  <Grid item sm={12} xs={12} md={5}>
                    <Box sx={{width: '100%'}}>
                        <StyledBoxBackground>
                          <StyledAvatarAnimation src={JavaIcon}/>
                        </StyledBoxBackground>
                    </Box>
                  </Grid>

              </Grid>  
          </Box>      
      </Container>
    </>
  )
}

export default Welcome;