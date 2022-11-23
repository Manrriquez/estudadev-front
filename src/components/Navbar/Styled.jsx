import styled from "styled-components";

const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    height: 80px;
    background: #fff;
    display: flex;
    align-items: center;
    position: fixed;
    width: calc(100% - 240px);
    left: 240px;
    z-index: 100;
    padding: 0 20px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    transition: all 0.5s ease;
`;

const NavProfileDetails = styled.div`
    display: flex;
    align-items: center;
    background: #f5f6fa;
    border: 2px solid #efeef1;
    border-radius: 6px;
    height: 50px;
    min-width: 190px;
    padding: 0 15px 0 2px;

    img {
        height: 40px;
        width: 40px;
        border-radius: 6px;
        object-fit: cover;
    }

    i {
        font-size: 25px;
        color: #333;
    }
`;

const NavProfileUsername = styled.span`
    font-size: 15px;
    font-weight: 500;
    color: #333;
    margin: 0 10px;
    white-space: nowrap;
`;
export { StyledNavbar, NavProfileDetails, NavProfileUsername};