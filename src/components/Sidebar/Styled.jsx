import styled, { css } from "styled-components";

const Sidebar = styled.div`
    position: fixed;
    height: 100%;
    width: 240px;
    background: #FFFFFF;
    transition: all 0.5s ease;

    @media (max-width: 1240px) {
          width: 60px;
    }
`;

const LogoDetails = styled.div`
    height: 80px;
    display: flex;
    color: #000000ab;
    align-items: center;

    i{
        font-size: 28px;
        min-width: 60px;
        text-align: center;
    }

`;

const LogoTitle = styled.span`
    font-size: 24px;
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
    bottom: 0px;
    width: 100%;
    background: black;
    padding: 20px 0px 20px 0px;
`;

const SidebarLink = styled.a`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.4s ease;
    cursor: pointer;
    color: #000000ab;

    &:hover {
        background: #f4282942;
        color: #F42829;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    i{
        min-width: 60px;
        text-align: center;
        font-size: 18px;
    }
`;

const SidebarLogotype = styled.img`
    margin-left: auto;
    margin-right: auto;
`;


const SidebarDescription = styled.span`
    font-size: 15px;
    white-space: nowrap;
`;


export {Sidebar, LogoDetails, LogoTitle, SidebarGroup, SidebarItem,
     SidebarLink, SidebarDescription, SidebarItemLogout, SidebarLogotype};