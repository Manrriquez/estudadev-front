import React from 'react'
import Layout from '../../components/Layout/Index';
import { BoxItem, GroupBox, LayoutContent, StyledLayout } from '../../components/Layout/Styled';
import Navbar from '../../components/Navbar/Index';
import SideBar from '../../components/Sidebar/Index';



const Home = (props) => {


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

export default Home;