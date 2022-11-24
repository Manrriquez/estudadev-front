import React from 'react'
import Navbar from '../Navbar/Index'
import SideBar from '../Sidebar/Index'
import {StyledLayout } from './Styled'

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