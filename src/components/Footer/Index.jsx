import styled from '@emotion/styled';
import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';




const StyledBoxFooter = styled(Box)(({ theme }) => ({
    backgroundColor: '#F42829',
    padding: '50px 0px 50px 0px',
}));



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
            <Box>
                <Stack direction="row" justifyContent="space-around" alignItems="center" spacing={2} 
                 sx={{borderBottom: '1px solid #ffffff3d', color: '#ffffff', paddingBottom: '25px'}}>
                    <Box sx={{textAlign: 'center'}}>
                        aaa
                    </Box>

                    <Box sx={{textAlign: 'center'}}>
                        aaaa
                    </Box>

                    <Box sx={{textAlign: 'center'}}>
                       aaaa
                    </Box>
                    <Box sx={{textAlign: 'center'}}>
                       aaaa
                    </Box>
                </Stack>
            </Box>
        </Container>
    </StyledBoxFooter>
  )
}

export default Footer;