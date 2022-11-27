import styled from "styled-components";


const FlexItems = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledHeader = styled.nav`
    
    position: fixed;
    width: 100%;
    background-color: #fff;
    z-index: 999;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-top: 1.5rem;
    padding-bottom: .8rem;

`;

const HeaderBrand = styled.a`

    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    text-decoration: none;
    white-space: nowrap;

`;

const HeaderLogo = styled.img`
    width: 100%;
`;

const HeaderList = styled.ul`

    display: flex;
    padding-left: 0;
    align-items:    center;
    margin-bottom: 0;
    list-style: none;

    
`;

const HeaderListItem = styled.li`
    list-style: none;
    margin-left: 0.7rem;
    margin-right: 0.7rem;

    @media (max-width: 992px) {
        display: none;
    }
`;

const HeaderLinkItem = styled.a`
    text-decoration: none;
    transition: 0.3s;
    font-weight: 500;
    font-size: clamp(18px, 3vw, 22px);
    color: #393536;

    &:hover {
        color: #F42829;
    }
`;

export {StyledHeader, HeaderBrand,HeaderLogo, HeaderList, HeaderListItem, FlexItems, HeaderLinkItem};