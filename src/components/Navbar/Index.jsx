import React from 'react'
import { LayoutButton, LayoutTitle } from '../Layout/Styled'
import {NavProfileDetails, NavProfileUsername, StyledNavbar} from './Styled'

const Navbar = () => {
  return (
    <StyledNavbar>
        <LayoutButton>
         <i className='bx bx-menu sidebarBtn'></i>
         <LayoutTitle>Dashboard</LayoutTitle>
        </LayoutButton>

        <NavProfileDetails>
            <NavProfileUsername>Fulano</NavProfileUsername>
            <i className='bx bx-chevron-down'></i>
        </NavProfileDetails>
    </StyledNavbar>
  )
}

export default Navbar;