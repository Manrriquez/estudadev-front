import styled from '@emotion/styled';
import { Box, List, ListItem } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom';


const StyledBoxContent = styled(Box)(({ theme }) => ({

    background: '#F42829',  
    width: '100%',
    zIndex: 0,
    height: '100vh',
   
}));


const StyledListCircle = styled(List)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    zIndex: 0,
    left: 0,
    width: '100%',
    height:  '100%',
    overflow: 'hidden',
}));


const StyledListItemCircle = styled(ListItem)(({ theme }) => ({

    position: 'absolute',
    display: 'block',
    listStyle: 'none',
    background: 'rgba(255, 255, 255, 0.2)',
    animation: 'animationItems 10s linear infinite',
    bottom: '-150px',

    "@keyframes animationItems": {
      "0%": {
        transform: "translateY(0) rotate(0deg)",
        opacity: 1,
        borderRadius: 0
      },
      "100%": {
        transform: "translateY(-1000px) rotate(720deg)",
        opacity: 0,
        borderRadius: '50%'
      }
    },
   
}));

const BackgroundAnimted = ({children}) => {
  return (
    <StyledBoxContent component="div">
            <StyledListCircle component="ul">
                <StyledListItemCircle sx={{left: '10%', width: "35px", height: '35px', animationDelay: '2s!important', animationDuration: '12s!important'}}></StyledListItemCircle>
                <StyledListItemCircle sx={{left: '70%', width: "30px", height: '30px', animationDelay: '4s!important'}}></StyledListItemCircle>
                <StyledListItemCircle sx={{left: '40%', width: "60px", height: '60px', animationDelay: '0s!important', animationDuration: '18s!important'}}></StyledListItemCircle>
                <StyledListItemCircle sx={{left: '65%', width: "30px", height: '30px', animationDelay: '0s!important'}}></StyledListItemCircle>
                <StyledListItemCircle sx={{left: '75%', width: "110px", height: '110px', animationDelay: '3s!important'}}></StyledListItemCircle>
                <StyledListItemCircle sx={{left: '35%', width: "150px", height: '150px', animationDelay: '7s!important'}}></StyledListItemCircle>
                <StyledListItemCircle sx={{left: '50%', width: "25px", height: '25px', animationDelay: '15s!important', animationDuration: '45s!important'}}></StyledListItemCircle>
                <StyledListItemCircle sx={{left: '20%', width: "45px", height: '45px', animationDelay: '2s!important', animationDuration: '35s!important'}}></StyledListItemCircle>
                <StyledListItemCircle sx={{left: '85%', width: "150px", height: '150px', animationDelay: '0s!important', animationDuration: '11s!important'}}></StyledListItemCircle>
            </StyledListCircle>
            <Outlet />
    </StyledBoxContent>
  )
}

export default BackgroundAnimted