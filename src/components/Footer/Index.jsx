import styled from '@emotion/styled';
import { Box, Container, Grid, Input, InputAdornment, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Logotype from '../../_assets/img/LOGOTYPE.svg'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';



const StyledBoxFooter = styled(Box)(({ theme }) => ({
    backgroundColor: '#F42829',
    padding: '50px 0px 50px 0px',
}));

var itemsLink = [
    {
        name: "Probably lorem ipsum",
        link: "https://localhost:5173"
    },
    {
        name: "Probably lorem ipsum",
        link: "https://localhost:5173"
    },
    {
        name: "Probably lorem ipsum",
        link: "https://localhost:5173"
    },
    {
        name: "Probably lorem ipsum",
        link: "https://localhost:5173"
    },
    {
        name: "Probably lorem ipsum",
        link: "https://localhost:5173"
    },
    {
        name: "Probably lorem ipsum",
        link: "https://localhost:5173"
    },
    

  ]

const Footer = () => {
  return (
    <StyledBoxFooter component="footer" mt={20}>
        <Container maxWidth="lg">
            <Box>
                <Stack direction="row" justifyContent="space-around" alignItems="center" spacing={2} 
                 sx={{borderBottom: '1px solid #ffffff3d', color: '#ffffff', paddingBottom: '25px'}}>
                    <Box sx={{textAlign: 'center'}}>
                        <LocationOnIcon sx={{fontSize: '40px'}} />
                        <Typography component="h4" sx={{fontWeight: 800, fontSize: '22px', mb: 1}}>Localização</Typography>
                        <Typography component="p"sx={{fontWeight: 400}}>1010 Avenue, sw 54321, chandigarh</Typography>
                    </Box>

                    <Box sx={{textAlign: 'center'}}>
                        <CallIcon sx={{fontSize: '40px'}} />
                        <Typography component="h4" sx={{fontWeight: 800, fontSize: '22px', mb: 1}}>Contato</Typography>
                        <Typography component="p" sx={{fontWeight: 400}}>(11) 9982-212</Typography>
                    </Box>

                    <Box sx={{textAlign: 'center'}}>
                        <EmailIcon sx={{fontSize: '40px'}}/>
                        <Typography component="h4" sx={{fontWeight: 800, fontSize: '22px', mb: 1}}>E-mail</Typography>
                        <Typography component="p" sx={{fontWeight: 400}}>estudadev@contato.com.br</Typography>
                    </Box>
                </Stack>
            </Box>
            <Box mt={7}>
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <Typography component="h2" sx={{color: '#ffffff', fontSize: '24px', fontWeight: 700, mb: 1}}>Sobre nós</Typography>
                        <Typography component="p" sx={{color: '#ffffff', fontWeight: 400}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum suscipit eligendi soluta voluptatem. Aliquid numquam, cum voluptatem dignissimos odio pariatur!
                        </Typography>

                        <Typography component="h2" sx={{color: '#ffffff', fontSize: '21px', fontWeight: 600, mt: 3}}>Siga-nos nas redes sociais:</Typography>
                        <Box sx={{display: 'flex', gap: '25px', alignItems: 'center'}} mt={3}>
                            <Box sx={{backgroundColor: '#fFFFFF', borderRadius: '100%', padding: '10px'}}>
                                <a href="#" style={{color: '#F42829', textAlign: 'center', fontSize: '28px', display: 'flex', alignItems: 'center'}}>
                                    <FacebookIcon  sx={{fontSize: '30px'}}/>
                                </a>
                            </Box>
                            <Box sx={{backgroundColor: '#fFFFFF', borderRadius: '100%', padding: '10px'}}>
                                <a href="#" style={{color: '#F42829', textAlign: 'center', fontSize: '28px', display: 'flex', alignItems: 'center'}}>
                                    <LinkedInIcon  sx={{fontSize: '30px'}}/>
                                </a>
                            </Box>
                            <Box sx={{backgroundColor: '#fFFFFF', borderRadius: '100%', padding: '10px'}}>
                                <a href="#" style={{color: '#F42829', textAlign: 'center', fontSize: '28px', display: 'flex', alignItems: 'center'}}>
                                    <InstagramIcon  sx={{fontSize: '30px'}}/>
                                </a>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box>
                            <Typography component="h2" sx={{color: '#ffffff', fontSize: '24px', fontWeight: 700, mb: 1, textAlign: 'center'}}>Links Uteis</Typography>
                            <List>
                                {itemsLink.map((item) => (
                                    <ListItem sx={{justifyContent: 'center'}}>
                                        <a style={{textDecoration: 'none', color: '#ffffff', fontWeight: 400}} href={item.link}>{item.name}</a>
                                    </ListItem>
                                ))};
                            </List>
                        </Box>
                        
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography component="h2" sx={{color: '#ffffff', fontSize: '24px', fontWeight: 700, mb: 1}}>Inscreva-se</Typography>
                        <Typography component="p" sx={{color: '#ffffff', fontWeight: 400}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum suscipit eligendi soluta voluptatem. Aliquid numquam, cum voluptatem dignissimos odio pariatur!
                        </Typography>
                        <Input sx={{border: '2px solid #ffffff', color: '#FFFFFF', mt: 3, borderRadius: '8px',
                         width: '100%', padding: '10px'}} startAdornment={
                            <InputAdornment position="end">
                                 <EmailIcon sx={{color: '#ffffff', paddingRight: '5px'}} />
                            </InputAdornment>
                        }/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </StyledBoxFooter>
  )
}

export default Footer;