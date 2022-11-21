import styled from "styled-components";

const CenteredItem = styled.div`
    height: 100vh;
    width: 100%;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index; 99999;
    position: absolute;
`;

const CenteredComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const StyledForm = styled.form`
    width: 450px;
    background: #FFFF;
    padding: 25px;
    border-radius: 8px;

`;

const FormGroup = styled.div`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
`;

const StyledLabel = styled.label`
    font-weight: 600;
    font-size: clamp(16px, 3vw, 17px);
    line-height: 32px;
    color: #FCA61F;
`;
const StyledInput = styled.input`
    height: 35px;
    background: #FFFF;
    font-size: 16px;
    color: #34303E;
    border: solid 1px #34303E;
    display: block;
    width: 95%;
    padding: .375rem .75rem;
    font-weight: 400;
    border-radius: 8px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    &::placeholder {
        color: #34303E;
        opacity: 1;
    }

    &:focus {
        border-color: #F4292A;
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgba(244, 41, 42, 0.37);
    }

`;

const TypographyForm = styled.p`
    font-size: 21px;
    text-align: center;
    max-width: 365px;
    margin-left: auto;
    margin-right: auto;
    font-weight: 400;
    color: #000;
`;

const TypographyLink = styled.a`
    color: #F42829;
    text-decoration: none;
    float: ${props => props.align};
`;

const ButtonPrimary = styled.button`
    background: #F42829;
    border-radius: 8px;
    padding: 10px;
    color: #fff;
    font-weight: 600;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #F42829;
    font-size: 18px;

    &:focus {
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgba(244, 41, 42, 0.37);
    }
`;
export {StyledForm, CenteredItem, FormGroup, StyledInput, StyledLabel, ButtonPrimary, TypographyForm, TypographyLink, CenteredComponent};