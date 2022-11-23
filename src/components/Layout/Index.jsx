import React from 'react'
import Navbar from '../Navbar/Index'
import { StyledNavbar } from '../Navbar/Styled'
import SideBar from '../Sidebar/Index'
import { LayoutContent, StyledLayout } from './Styled'

const Layout = () => {
  return (
    <>
        <SideBar />
        <StyledLayout className="layout-section">
            <Navbar />            
        </StyledLayout>
    </>
  )
}

export default Layout