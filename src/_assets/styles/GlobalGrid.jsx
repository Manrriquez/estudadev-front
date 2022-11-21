import styled from "styled-components";



const Container = styled.div`

    width: 100%;
    padding-right: .75rem;
    padding-left: .75rem;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 1200px) {
     max-width: 1140px;
    }

    @media (max-width: 992px) {
     max-width: 960px;
    }

    @media (max-width: 768px) {
        max-width: 720px;
    }

    @media (max-width: 576px) {
        max-width: 540px;
    }

`;

const StyledSection = styled.section`
    padding-right: .10rem;
    padding-left: .10rem;
`;

const Row = styled.div`
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: calc(var(--bs-gutter-y) * -1);

`;

const Col = styled.div`

    @media (min-width: 792px) {
        flex: 1 0 0%;
    }

    @media (max-width: 992px) {
        text-align: center;
        width: 100%;
    }
    margin-top: ${props => props.size};
`;





export {Container, StyledSection, Row, Col};