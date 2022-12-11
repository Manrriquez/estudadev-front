import styled from '@emotion/styled';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Error404 from '../../_assets/img/404.svg';

const ButtonForm = styled.a`
    background: #F42829;
    cursor: pointer;
    border-radius: 8px;
    padding: 10px 25px 10px 25px;
    color: #fff;
    font-weight: 600;
    width: 100%;
    border: 1px solid #F42829;
    font-size: 18px;
    text-decoration: none;

    &:focus {
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgba(244, 41, 42, 0.37);
    }
`;

const NotFound = () => {
  return (
    <>
      <Container sx={{my: 5}} component="main" maxWidth="lg">
        <Box component="section" sx={{display: 'flex', justifyContent: 'center'}}>
          <Box sx={{textAlign: 'center', maxWidth: '600px'}}>
              <img src={Error404} style={{width: '100%', marginTop: '2rem', marginBottom: '3rem'}}/> 
              <ButtonForm href="/" >Voltar para o inicio</ButtonForm>
          </Box>      
        </Box>
      </Container>
    </>
  )
}

export default NotFound;