import styled from '@emotion/styled';
import { Box, Container, FormControl, Grid, Input, Typography} from '@mui/material';
import React from 'react'
import BackgroundAnimted from '../../../components/BackgroundAnimated/Index';
import Logotype from '../../../assets/img/LOGOTYPE.svg'



const StyledInput = styled.input`
  height: 55px;
  background: #FFFF;
  font-size: 16px;
  color: #34303E;
  border: solid 1px #34303E;
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-weight: 400;
  border-radius: 8px;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  &::placeholder {
      color: #34303E;
      opacity: 1;
  }

  &:focus {
      border-color: #F4292A;
      outline: 0;
      box-shadow: 0 0 0 0.25rem rgba(244, 41, 42, 0.37);
  }
`;
const TypographyForm = styled.p`
    font-size: 23px;
    text-align: center;
    max-width: 365px;
    margin-left: auto;
    margin-right: auto;
    font-weight: 400;
    color: #000;
`;
const TypographyLink = styled.a`
    color: #F42829;
    text-decoration: none;
`;
const ButtonForm = styled.button`
    background: #F42829;
    cursor: pointer;
    border-radius: 8px;
    padding: 10px;
    color: #fff;
    font-weight: 600;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #F42829;
    font-size: 18px;

    &:focus {
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgba(244, 41, 42, 0.37);
    }
`;

const Login = () => {


  return (
       <Container component="main" sx={{zIndex: 2}}>
          <Grid container component="section">
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%'}}>
              <Box sx={{width: '470px', backgroundColor: '#FFFFFF', padding: '25px', borderRadius: '12px', zIndex: 9}}>
                <Box sx={{textAlign: 'center'}}>
                  <img style={{width: '225px'}} src={Logotype} alt="Logotipo" />
                </Box>
                <TypographyForm>
                   Entre para realizar o login ou <br /> <TypographyLink href="https://kdkdsad.com">registre-se aqui.</TypographyLink>
                </TypographyForm>
                
                <FormControl sx={{my: 2, width: '100%'}}>
                  <StyledInput placeholder="exemplo@gmail.com" type="email"/>
                </FormControl>

                <FormControl sx={{my: 2, width: '100%'}}>
                   <TypographyLink style={{textAlign: 'end'}} href="#">Esqueceu a senha?</TypographyLink>
                  <StyledInput placeholder="********" type="password" />
                </FormControl>

                <FormControl sx={{my: 2, width: '100%'}}>
                  <ButtonForm>Entrar</ButtonForm>
                </FormControl>
              </Box>
            </Box>
          </Grid>
       </Container>
  )
}

export default Login;