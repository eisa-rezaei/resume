import {createGlobalStyle} from "styled-components";

export const GlobalStyling = createGlobalStyle`
  *{
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  body {
    background-color: #fff;
    user-select: none;
    line-height: 1;
    font-family: "Changa", sans-serif;
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

h1,h2,h3 {
  line-height: 2;
}

  @media (max-width : 600px){
  p {
    font-size: 0.8rem;
  }
  } 
`;
