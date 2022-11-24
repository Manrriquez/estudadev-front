import React, { useState } from 'react'
import { LogoDetails, LogoTitle, Sidebar, SidebarDescription, SidebarGroup, SidebarItem, SidebarItemLogout, SidebarLink, SidebarLogotype} from './Styled';
import Logotype from '../../_assets/img/LOGOTYPE.svg'


const SidebarItems = [
    {
      link: "/",
      icon: "bx bx-grid-alt",
      description: "Cursos"
    },
    {
        link: "/home",
        icon: "bx bx-grid-alt",
        description: "Jogos"
    },
    {
        link: "/login",
        icon: "bx bx-grid-alt",
        description: "Videos"
    }
];


const SideBar = () => {

    const [active, setActive] = useState(null);

    return (
        <Sidebar className='sidebar'>
                <LogoDetails>
                    <SidebarLogotype src={Logotype} />
                </LogoDetails>

                <SidebarGroup>
                    {SidebarItems.map(item => (
                        <SidebarItem>
                            <SidebarLink className={`${active === item && 'active'}`}
                                onClick={() => setActive(item)} href={item.link}>
                                <i className={item.icon}></i>
                                <SidebarDescription>{item.description}</SidebarDescription>
                            </SidebarLink>
                        </SidebarItem>
                    ))}

                    
                    <SidebarItemLogout>
                        <SidebarLink href='#'>
                            <i className='bx bx-log-out'></i>
                            <SidebarDescription>Sair</SidebarDescription>
                        </SidebarLink>
                    </SidebarItemLogout>

                </SidebarGroup>
        </Sidebar>
    )
}
export default SideBar;




