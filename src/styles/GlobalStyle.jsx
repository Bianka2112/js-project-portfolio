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

   *:focus-visible {
      outline: 2px solid blueviolet;
      outline-offset: 2px;
   }

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
}

.slide-in-left {
  animation: slideInLeft 0.8s ease-out forwards;
}

.slide-in-right {
  animation: slideInRight 0.8s ease-out forwards;
}
`