import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  }
  
  body {
    font-family: "Poppins", sans-serif;
    background-color: #000;
    color: #fff;
    width: 100%;
    height: 100%;
  }
`;
export default GlobalStyle;
