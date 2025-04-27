import { createGlobalStyle } from "styled-components"
import { media } from "./media"

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Poppins", "Arial", sans-serif;
    width: 100%;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  a {
     text-decoration: none;
     color: inherit;
   }

`