import React from 'react'
import { LogoDetails, LogoTitle, Sidebar, SidebarDescription, SidebarGroup, SidebarItem, SidebarItemLogout, SidebarLink} from './Styled';


const SideBar = () => {
    
    return (
        <Sidebar className='sidebar'>
            <LogoDetails>
                <i className='bx bxl-c-plus-plus'></i>
                <LogoTitle>Luisfernando</LogoTitle>
            </LogoDetails>

            <SidebarGroup>

                <SidebarItem>
                    <SidebarLink href='#'>
                        <i className='bx bx-grid-alt'></i>
                        <SidebarDescription>Dashboard</SidebarDescription>
                    </SidebarLink>
                </SidebarItem>

                <SidebarItem className='active'>
                    <SidebarLink href='#'>
                        <i className='bx bx-grid-alt'></i>
                        <SidebarDescription>Dashboard</SidebarDescription>
                    </SidebarLink>
                </SidebarItem>

                <SidebarItem>
                    <SidebarLink href='#'>
                        <i className='bx bx-grid-alt'></i>
                        <SidebarDescription>Dashboard</SidebarDescription>
                    </SidebarLink>
                </SidebarItem>

                <SidebarItem>
                    <SidebarLink href='#'>
                        <i className='bx bx-grid-alt'></i>
                        <SidebarDescription>Dashboard</SidebarDescription>
                    </SidebarLink>
                </SidebarItem>
                
                <SidebarItemLogout>
                < SidebarLink href='#'>
                        <i className='bx bx-grid-alt'></i>
                        <SidebarDescription>Dashboard</SidebarDescription>
                    </SidebarLink>
                </SidebarItemLogout>
            </SidebarGroup>
        </Sidebar>
    )
}
export default SideBar;