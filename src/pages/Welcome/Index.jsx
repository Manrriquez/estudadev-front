import styled from '@emotion/styled';
import { Avatar, Box, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import Navbar from '../../components/Navbar/Index';
import ProgramingHome from '../../_assets/img/programing-home.svg';
import JavaIcon from '../../_assets/img/java.svg';
import AwsIcon from '../../_assets/img/aws.svg';
import DockerIcon from '../../_assets/img/docker.svg';
import ReactIcon from '../../_assets/img/reactjs.svg';


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
    padding: '10px',
    borderRadius: '8px',
    width: '45px',
    height: '45px',
    background: '#FFFFFF',
	  // animation: 'animationAvatar1 8s linear 0s infinite',
    border: '1px solid #D9D9D9',
    boxShadow: '0px 4px 40px rgb(9 9 12 / 10%)',
    fontSize: '20px',

    "@keyframes animationAvatar1": {
      "0%": {
        transform: "translateY(0)",
      },
      "10%": {
	    	transform: "translateY(-8px)",
      },
      "30%": {
	    	transform: "translateY(-8px)",
      },
      "50%": {
	    	transform: "translateY(-8px)",
      },
      "70%": {
	    	transform: "translateY(-8px)",
      },
      "20%": {
	    	transform: "translateY(8px)",
      },
      "40%": {
	    	transform: "translateY(8px)",
      },
      "60%": {
	    	transform: "translateY(8px)",
      },
      "80%": {
        transform: "translateY(6.4px)",
      },
      "90%": {
		    transform: "translateY(-6.4px)",
      },
      "100%": {
        transform: "translateY(0)",
      }
    },
    "@keyframes animationAvatar2": {
      "0%": {
        transform: "translateY(0)",
      },
      "10%": {
	    	transform: "translateY(8px)",
      },
      "30%": {
	    	transform: "translateY(8px)",
      },
      "50%": {
	    	transform: "translateY(8px)",
      },
      "70%": {
	    	transform: "translateY(8px)",
      },


      "20%": {
	    	transform: "translateY(-8px)",
      },
      "40%": {
	    	transform: "translateY(-8px)",
      },
      "60%": {
	    	transform: "translateY(-8px)",
      },


      "80%": {
        transform: "translateY(-6.4px)",
      },
      "90%": {
		    transform: "translateY(6.4px)",
      },
      "100%": {
        transform: "translateY(0)",
      }
    },
}));


const Welcome = () => {
  return (
    <>
      <Navbar />
      <Container sx={{marginTop: 5}} component="main" maxWidth="lg">
          <Box component="section">
              <Grid container spacing={2} sx={{alignItems: 'center', mt: 6}}>
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

                  <Grid item sm={12} xs={12} md={5} sx={{mt: {xs: '5rem', md: 0} }}>
                    <Box sx={{width: '100%'}}>
                        <StyledBoxBackground sx={{display: 'flex', justifyContent: 'space-around'}}>
                          <StyledAvatarAnimation src={JavaIcon} sx={{top: '100px', animation: 'animationAvatar1 8s linear 0s infinite'}}/>
                          <StyledAvatarAnimation src={DockerIcon} sx={{bottom: {md: '20px', xs: '40px'},
                           animation: 'animationAvatar2 8s linear 0s infinite'}}/>
                          <StyledAvatarAnimation src={AwsIcon} sx={{top: {md: '58px', xs: '20px'}, animation: 'animationAvatar1 8s linear 0s infinite'}}/>
                          <StyledAvatarAnimation src={ReactIcon} sx={{animation: 'animationAvatar2 8s linear 0s infinite'}}/>
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