import styled, { css } from "styled-components";

const Sidebar = styled.div`
    position: fixed;
    height: 100%;
    width: 240px;
    background: #0a2558;
    transition: all 0.5s ease;
    
    .active {
        width: 60px;

        .layout-section {
            width: calc(100% - 60px);
            left: 60px;

            nav {
                left: 60px;
                width: calc(100% - 60px);
            }
        }
    }
`;

const LogoDetails = styled.div`
    height: 80px;
    display: flex;
    align-items: center;

    i{
        font-size: 28px;
        font-weight: 500;
        color: #fff;
        min-width: 60px;
        text-align: center;
    }

`;

const LogoTitle = styled.span`
    color: #fff;
    font-size: 24px;
    font-weight: 500;
`;

const SidebarGroup = styled.ul`
    margin-top: 10px;

`;

const SidebarItem = styled.li`
    position: relative;
    list-style: none;
    height: 50px;
`;

const SidebarItemLogout = styled.li`
    position: absolute;
    bottom: 0;
    width: 100%;
`;

const SidebarLink = styled.a`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: all 0.4s ease;

    .active {
        background: #081d45;
    }
    
    &:hover {
         background: #081d45;
    }

    i{
        min-width: 60px;
        text-align: center;
        font-size: 18px;
        color: #fff;
    }
`;

const SidebarDescription = styled.span`
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    white-space: nowrap;
`;


export {Sidebar, LogoDetails, LogoTitle, SidebarGroup, SidebarItem, SidebarLink, SidebarDescription, SidebarItemLogout};