import styled from '@emotion/styled';
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import Navbar from '../../components/Navbar/Index';
import ProgramingHome from '../../assets/img/programing-home.svg';
import JavaIcon from '../../assets/img/java.svg';
import AwsIcon from '../../assets/img/aws.svg';
import DockerIcon from '../../assets/img/docker.svg';
import ReactIcon from '../../assets/img/reactjs.svg';
import BackgroundGeometric from '../../assets/img/background-geometric.svg'
import DataObjectIcon from '@mui/icons-material/DataObject';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Carousel from 'react-material-ui-carousel';
import BlogImage from '../../assets/img/background-blog.jpg';
import IlustrationComputer from '../../assets/img/ilustration-computer-accordion.svg';
import IlustrationReact from '../../assets/img/ilustration-react-accordion.svg';
import IlustrationHtml from '../../assets/img/ilustration-html-accordion.svg';
import AvatarImage from '../../assets/img/avatar.jpg';
import Footer from '../../components/Footer/Index';



var itemsCarousel = [
  {
      name: "Probably the most random thing you have ever seen!",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptates! Ex ipsam ducimus est debitis? Perferendis amet provident quis voluptatem, iste aperiam sint aliquam illo, Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptates! Ex ipsam ducimus est debitis? Perferendis amet provident quis voluptatem, iste aperiam sint aliquam illo.",
      src: BlogImage,
      link: "https://localhost:5173",
  },
  {
    name: "Probably the most random thing you have ever seen!",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptates! Ex ipsam ducimus est debitis? Perferendis amet provident quis voluptatem, iste aperiam sint aliquam illo, Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptates! Ex ipsam ducimus est debitis? Perferendis amet provident quis voluptatem, iste aperiam sint aliquam illo.",
    src: BlogImage,
    link: "https://localhost:5173",
},
{
  name: "Probably the most random thing you have ever seen!",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptates! Ex ipsam ducimus est debitis? Perferendis amet provident quis voluptatem, iste aperiam sint aliquam illo, Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptates! Ex ipsam ducimus est debitis? Perferendis amet provident quis voluptatem, iste aperiam sint aliquam illo.",
    src: BlogImage,
    link: "https://localhost:5173",
},
{
  name: "Probably the most random thing you have ever seen!",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptates! Ex ipsam ducimus est debitis? Perferendis amet provident quis voluptatem, iste aperiam sint aliquam illo, Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptates! Ex ipsam ducimus est debitis? Perferendis amet provident quis voluptatem, iste aperiam sint aliquam illo.",
    src: BlogImage,
    link: "https://localhost:5173",
},
{
  name: "Probably the most random thing you have ever seen!",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptates! Ex ipsam ducimus est debitis? Perferendis amet provident quis voluptatem, iste aperiam sint aliquam illo, Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptates! Ex ipsam ducimus est debitis? Perferendis amet provident quis voluptatem, iste aperiam sint aliquam illo.",
    src: BlogImage,
    link: "https://localhost:5173",
},
{
  name: "Probably the most random thing you have ever seen!",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptates! Ex ipsam ducimus est debitis? Perferendis amet provident quis voluptatem, iste aperiam sint aliquam illo, Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptates! Ex ipsam ducimus est debitis? Perferendis amet provident quis voluptatem, iste aperiam sint aliquam illo.",
    src: BlogImage,
    link: "https://localhost:5173",
},
]

var itemsDepoiment = [
  {
      avatar: AvatarImage,
      name: "Probably the most random",
      depoiment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptates! Ex ipsam ducimus est debitis? Perferendis amet provident quis voluptatem, iste aperiam sint aliquam illo, Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptates! Ex ipsam ducimus est debitis? Perferendis amet provident quis voluptatem, iste aperiam sint aliquam illo.",
  },
  {
    avatar: AvatarImage,
    name: "Probably the most random",
    depoiment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptates! Ex ipsam ducimus est debitis? Perferendis amet provident quis voluptatem, iste aperiam sint aliquam illo, Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptates! Ex ipsam ducimus est debitis? Perferendis amet provident quis voluptatem, iste aperiam sint aliquam illo.",
},
{
  avatar: AvatarImage,
  name: "Probably the most random",
  depoiment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptates! Ex ipsam ducimus est debitis? Perferendis amet provident quis voluptatem, iste aperiam sint aliquam illo, Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptates! Ex ipsam ducimus est debitis? Perferendis amet provident quis voluptatem, iste aperiam sint aliquam illo.",
},
{
  avatar: AvatarImage,
  name: "Probably the most random",
  depoiment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptates! Ex ipsam ducimus est debitis? Perferendis amet provident quis voluptatem, iste aperiam sint aliquam illo, Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptates! Ex ipsam ducimus est debitis? Perferendis amet provident quis voluptatem, iste aperiam sint aliquam illo.",
},
{
  avatar: AvatarImage,
  name: "Probably the most random",
  depoiment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptates! Ex ipsam ducimus est debitis? Perferendis amet provident quis voluptatem, iste aperiam sint aliquam illo, Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptates! Ex ipsam ducimus est debitis? Perferendis amet provident quis voluptatem, iste aperiam sint aliquam illo.",
},
{
  avatar: AvatarImage,
  name: "Probably the most random",
  depoiment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptates! Ex ipsam ducimus est debitis? Perferendis amet provident quis voluptatem, iste aperiam sint aliquam illo, Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptates! Ex ipsam ducimus est debitis? Perferendis amet provident quis voluptatem, iste aperiam sint aliquam illo.",
},
]

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


const StyledPaperBlog = styled(Paper)(({ theme }) => ({
    padding: '20px 55px 20px 55px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '25rem',
}));

const StyledAccordionItemsAnimation = styled(Avatar)(({ theme }) => ({
  position: 'relative',
  padding: '15px',
  borderRadius: '8px',
  width: '115px',
  height: '115px',
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
        <Container sx={{my: 5}} component="main" maxWidth="lg">
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

                    <Box mt={4} sx={{display: {xs: 'initial', md: 'flex'}, gap: '20px', width: '100%', alignItems: 'center'}}>
                      <Box sx={{maxWidth: '700px'}}>
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

                      <Box sx={{width: '100%'}}>
                            <StyledAccordionItemsAnimation sx={{my: 3, marginLeft: '40%', animation: 'animationBox1 8s linear 0s infinite'}} src={IlustrationComputer} />
                            <StyledAccordionItemsAnimation sx={{my: 3, marginLeft: '65%', animation: 'animationBox2 8s linear 0s infinite'}}  src={IlustrationHtml} />
                            <StyledAccordionItemsAnimation sx={{my: 3, marginLeft: '35%', animation: 'animationBox1 8s linear 0s infinite'}} src={IlustrationReact} />
                      </Box>
                    </Box>
                </Grid>
            </Box>

            <Box component="section" mt={20}>
              <Grid container spacing={2} sx={{alignItems: 'center'}}>
              <StyledTypographyLine mb={5}>Lorem ipsum dolor sit amet Dolorem, molestiae?</StyledTypographyLine>
                  <Grid item xs={12} md={7}>
                    <Box>
                      <iframe style={{width: '100%', minHeight: '25rem', borderRadius: '16px'}}
                       src="https://www.youtube.com/embed/rzwP43VNwy0"
                        title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay;
                         clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={5}>
                  <Box sx={{gap: 1, height: '25rem', p: 1, overflow: 'auto', width: '100%', scrollSnapType: 'x mandatory',
                        '& > *': {scrollSnapAlign: 'center',},'::-webkit-scrollbar': { display: 'none' },}}>
                        {itemsDepoiment.map((item) => (
                          <Paper elevation={4} sx={{minWidth: '300px', height: 'auto', my: 3, p: 4,
                          borderRadius: '18px', textAlign: 'center'}}>
                                <Avatar sx={{marginLeft: 'auto', marginRight: 'auto', marginBottom: '15px', width: '70px', height: '70px'}} alt="Remy Sharp" src={item.avatar} />
                                <Typography component="h4" sx={{mb: 2}}>{item.name}</Typography>
                                <Typography component="p" sx={{fontWeight: 400}}>{item.depoiment}</Typography>
                          </Paper>
                        ))}
                    </Box>
                  </Grid>
              </Grid>
            </Box>

            <Box component="section" mt={20}>
              
                <Grid container>
                  <StyledTypographyLine mb={5}>Lorem ipsum dolor sit amet Dolorem?</StyledTypographyLine>

                    <Box sx={{width: '100%'}} mb={20}>
                      <Carousel animation='slide' interval={5000} indicators={false} navButtonsAlwaysVisible={true}
                      navButtonsProps={{style: {backgroundColor: '#F42829'}}}>
                        {itemsCarousel.map((item) => (
                          <StyledPaperBlog sx={{backgroundImage: `linear-gradient(180deg,rgba(31,31,31,0) 23.22%,#251f1f 92.31%), url(${item.src})`}}>
                              <Box sx={{maxWidth: '670px'}}>
                                  <Typography component="h2" sx={{fontSize: 'clamp(24px, 3vw, 34px)', color: '#FFFFFF'}} mt={5}>
                                      {item.name}
                                  </Typography>
                                  <Typography component="p" sx={{fontSize: '20px', color: '#FFFFFF', fontWeight: 400,
                                  whiteSpace: {xs: 'nowrap', md: 'initial'}, overflow: {xs: 'hidden', md: 'initial'},
                                    textOverflow: {xs: 'ellipsis',md: 'initial'}, maxWidth: {xs: '70ch', md: '670px'} }} mt={2}>
                                    {item.description}
                                  </Typography>
                                    <Button variant="contained" color="primary" sx={{px: 5, mt: {xs: 7, md: 3}, textAlign: 'center'}} size="medium" component="a" href={item.link}>
                                      Lorem, ipsum dolor sit amet
                                    </Button>
                              </Box>
                        </StyledPaperBlog>
                        ))}
                      </Carousel>
                    </Box>
                </Grid>
            </Box>
        </Container>
      <Footer />
    </>
  )
}

export default Welcome;