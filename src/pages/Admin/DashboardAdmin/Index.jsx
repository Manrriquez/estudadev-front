import React from 'react'
import { BoxItem, GroupBox, LayoutContent, StyledLayout } from '../../../components/Layout/Styled'
import Navbar from '../../../components/Navbar/Index'
import SideBar from '../../../components/Sidebar/Index'



const Index = () => {
  return (
        <>
        <SideBar />
            <StyledLayout className="layout-section">
                <Navbar />       

            <LayoutContent>
                <GroupBox>
                    <BoxItem>aaaaaaaaaaaaaaaaaaaaaaaaa</BoxItem>
                </GroupBox>
            </LayoutContent>

            </StyledLayout>
        </>
  )
}

export default Index