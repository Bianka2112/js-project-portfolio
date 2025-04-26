import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Poppins", "Arial", sans-serif;
    min-width: auto;
    max-width: 800px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  a {
     text-decoration: none;
     color: inherit;
   }
`