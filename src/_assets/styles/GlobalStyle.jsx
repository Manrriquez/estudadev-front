import { createGlobalStyle } from "styled-components";



export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Poppins', sans-serif;
  }

  a {
    text-decoration: none;
  }
  
  button {
    cursor: pointer;
  }

`;
