import styled from '@emotion/styled';
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import Navbar from '../../components/Navbar/Index';
import ProgramingHome from '../../_assets/img/programing-home.svg';
import JavaIcon from '../../_assets/img/java.svg';
import AwsIcon from '../../_assets/img/aws.svg';
import DockerIcon from '../../_assets/img/docker.svg';
import ReactIcon from '../../_assets/img/reactjs.svg';
import ThemeGlobal from '../../_config/ThemeGlobal';
import BackgroundGeometric from '../../_assets/img/background-geometric.svg'
import DataObjectIcon from '@mui/icons-material/DataObject';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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

const StyledTypograpyTitleDescription = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: 'clamp(17px, 3vw, 18px)',
  color: '#FFFF',
}));

const StyledBoxPrograming = styled(Box)(({ theme }) => ({
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#F42829',
    borderRadius: '18px',
    backgroundSize: '60%',
    maxHeight: '240px',
    padding: '25px 20px 25px 20px',
    backgroundPosition: 'right',
    backgroundImage: `url(${BackgroundGeometric})`,
}));

const StyledBoxProgramingBlock = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  border: '1px solid #00000047',
  boxShadow: '0px 4px 60px rgb(0 0 0 / 35%)',
  borderRadius: '20px',
  padding: '20px',
  color: '#4F5665',
  width: '150px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '130px',
  position: 'relative',
  marginBottom: '25px',

  '&:hover': {
    border: '1px solid #ff1d1d52',
    boxShadow: ' 0px 4px 60px rgb(255 0 0 / 35%)',
    color: '#F42829',
  },
  "@keyframes animationBox1": {
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
  "@keyframes animationBox2": {
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

const StyledTypograpyPrograming = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  flexDirection: 'column',
  display: 'flex',
  fontSize: 'clamp(17px, 3vw, 18px)',
}));

const StyledTypographyLine = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(23px, 3vw, 26px)',
  borderBottom: '7px solid #F42829',
  color: '#0B132A',
  borderRadius: '7px',
  fontWeight: 700,
  marginBottom: '65px',
  maxWidth: '100%'
}));



const StyledBoxDoubt = styled(Box)(({ theme }) => ({
    fontSize: '16px',
    maxWidth: '320px',
    flexDirection: 'column',
    display: 'flex',
    background: '#FFFFFF',
    padding: '10px',
    color: '#4F5665',
    borderRadius: '18px',
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  border: 'solid 2px #F42829',
  borderRadius: '16px!important',
  marginBottom: '10px',
  marginTop: '10px',
  padding: '10px',
}));



const Welcome = () => {
  return (
    <>
      <Navbar />
      <Container sx={{marginTop: 5}} component="main" maxWidth="lg">
          <Box component="section">
              <Grid container spacing={2} sx={{alignItems: 'center', mt: 10}}>
                  <Grid item  sm={12}  xs={12} md={6}>
                    <Box>
                        <StyledTypograpyTitle component="h1">
                          Lorem ipsum dolor sit amet accusamus quaerat iusto accusantium.
                        </StyledTypograpyTitle>
                        <StyledTypograpyDescription component="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptates! Ex ipsam ducimus est debitis? Perferendis amet provident quis voluptatem, iste aperiam sint aliquam illo?
                      </StyledTypograpyDescription>
                    </Box>
                  </Grid>

                  <Grid item sm={12} xs={12} md={6} sx={{mt: {xs: '5rem', md: 0} }}>
                    <Box sx={{width: '100%'}}>
                        <StyledBoxBackground sx={{display: 'flex', justifyContent: 'space-around'}}>
                          <StyledAvatarAnimation src={JavaIcon} sx={{top: '100px', animation: 'animationAvatar1 8s linear 0s infinite'}}/>
                          <StyledAvatarAnimation src={DockerIcon} sx={{bottom: {md: '50px', xs: '40px'},
                           animation: 'animationAvatar2 8s linear 0s infinite'}}/>
                          <StyledAvatarAnimation src={AwsIcon} sx={{top: {md: '58px', xs: '20px'}, animation: 'animationAvatar1 8s linear 0s infinite'}}/>
                          <StyledAvatarAnimation src={ReactIcon} sx={{animation: 'animationAvatar2 8s linear 0s infinite'}}/>
                        </StyledBoxBackground>
                    </Box>
                  </Grid>

              </Grid>  
          </Box>      

          <Box component="section" mt={20}>
            <StyledBoxPrograming>
              <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Typography sx={{textAlign: 'center', fontSize: 'clamp(28px, 3vw, 32px)', fontWeight: 700, color: '#ffffff'}} component="h2" mt={5}>
                        Lorem ipsum dolor sit amet.
                      </Typography>
                        <StyledTypograpyTitleDescription component="p" sx={{textAlign: 'center'}}>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ad dolore aut quibusdam maxime explicabo,
                        </StyledTypograpyTitleDescription>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box sx={{display: 'flex', gap: '15px', justifyContent: 'space-evenly'}}>
                        <Box sx={{position: 'relative', top: '25px'}}>
                            <StyledBoxProgramingBlock sx={{animation: 'animationBox2 8s linear 0s infinite'}}>
                              <StyledTypograpyPrograming component="p">
                                <DataObjectIcon sx={{ml: 'auto', mr: 'auto', fontSize: '26px'}}/>
                                UI/UX
                              </StyledTypograpyPrograming>
                            </StyledBoxProgramingBlock>

                            <StyledBoxProgramingBlock sx={{animation: 'animationBox1 8s linear 0s infinite'}}>
                              <StyledTypograpyPrograming>
                                <DataObjectIcon sx={{ml: 'auto', mr: 'auto', fontSize: '26px'}}/>
                                UI/UX
                              </StyledTypograpyPrograming>
                            </StyledBoxProgramingBlock>
                        </Box>
                        <Box sx={{position: 'relative', bottom: '35px'}}>
                            <StyledBoxProgramingBlock sx={{animation: 'animationBox1 8s linear 0s infinite'}}>
                              <StyledTypograpyPrograming>
                                <DataObjectIcon sx={{ml: 'auto', mr: 'auto', fontSize: '26px'}}/>
                                UI/UX
                              </StyledTypograpyPrograming>
                            </StyledBoxProgramingBlock>
                            
                            <StyledBoxProgramingBlock sx={{animation: 'animationBox2 8s linear 0s infinite'}}>
                              <StyledTypograpyPrograming>
                                <DataObjectIcon sx={{ml: 'auto', mr: 'auto', fontSize: '26px'}}/>
                                UI/UX
                              </StyledTypograpyPrograming>
                            </StyledBoxProgramingBlock>

                        </Box>
                      </Box>
                    </Grid>
              </Grid>
            </StyledBoxPrograming>
          </Box>
          <Box component="section" mt={{md: 20, xs: 50}}>
              <Grid container>
                  <StyledTypographyLine mb={5}>Lorem ipsum dolor sit amet Dolorem, molestiae?</StyledTypographyLine>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                      <StyledBoxDoubt>
                        <DataObjectIcon sx={{fontSize: '36px'}}/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, distinctio!
                      </StyledBoxDoubt>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <StyledBoxDoubt>
                        <DataObjectIcon sx={{fontSize: '36px'}}/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, distinctio!
                      </StyledBoxDoubt>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <StyledBoxDoubt>
                        <DataObjectIcon sx={{fontSize: '36px'}}/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, distinctio!
                      </StyledBoxDoubt>
                    </Grid>
                  </Grid>

                  <Box mt={{md: 15, xs: 6}}>
                    <Box sx={{display: {md: 'flex'}, gap: '15px'}}>
                            <StyledAccordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                  <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                  <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                  </Typography>
                                </AccordionDetails>
                            </StyledAccordion>

                            <StyledAccordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                  <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                  <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                  </Typography>
                                </AccordionDetails>
                            </StyledAccordion>
                    </Box>

                    <Box sx={{display: {md: 'flex'}, gap: '15px'}}>
                            <StyledAccordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                  <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                  <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                  </Typography>
                                </AccordionDetails>
                            </StyledAccordion>
                            <StyledAccordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                  <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                  <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                  </Typography>
                                </AccordionDetails>
                            </StyledAccordion>
                    </Box>
                  </Box>
              </Grid>
          </Box>
      </Container>
    </>
  )
}

export default Welcome;