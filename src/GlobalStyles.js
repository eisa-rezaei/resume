import { createGlobalStyle } from "styled-components";

export const GlobalStyling = createGlobalStyle`
  *{
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    scroll-behavior: smooth;
  }
  body {
    background-color: #fff;
    user-select: none;
  }
  a {
    color: inherit;
    text-decoration: none;
    margin-bottom: 0;
  }
  li {
    list-style: none;
    margin-bottom: 0;
  }
  p {
    font-size: 1rem;
    margin-bottom: 0;
  }
  button{
    background-color: inherit;
    cursor: pointer;
  }

  @media (max-width : 600px){
  p {
    font-size: 0.8rem;
  }
  } 
`;
