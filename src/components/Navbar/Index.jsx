import React, { useContext, useState } from 'react'
import { Context, useSpeedDialContext } from '../../_config/Provider';
import { LayoutButton, LayoutTitle } from '../Layout/Styled'
import {NavProfileDetails, NavProfileUsername, StyledNavbar} from './Styled'


const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  // className={menuIcon ? 'bx bx-menu-alt-right' : 'bx bx-menu'}

  const handleClick = event => {
    setMenuIcon(current => !current);
  };

  // const [menuIcon, setMenuIcon] = useContext(Context);

  //  var contextUse = useSpeedDialContext();
  return (
    <StyledNavbar>
        <LayoutButton>
             <i className={menuIcon ? 'bx bx-menu-alt-right' : 'bx bx-menu'}
             onClick={handleClick}></i>
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