import styled from "styled-components";

const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    height: 80px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    position: fixed;
    width: calc(100% - 280px);
    left: 240px;
    z-index: 100;
    padding: 0 20px;
    transition: all 0.5s ease;

    @media (max-width: 1240px) {
        width: calc(100% - 60px);
        left: 60px;
    }
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

        @media (max-width: 700px) {
            display: none;
        }
    }

    i {
        font-size: 25px;
        color: #333;

        @media (max-width: 700px) {
            display: none;
        }
    }

    @media (max-width: 700px) {
        height: 50px;
        min-width: 40px;    
    }

    @media (max-width: 550px) {
          display: none;
    }

`;

const NavProfileUsername = styled.span`
    font-size: 15px;
    font-weight: 500;
    color: #333;
    margin: 0 10px;
    white-space: nowrap;

    @media (max-width: 700px) {
        display: none;
    }
`;
export { StyledNavbar, NavProfileDetails, NavProfileUsername};