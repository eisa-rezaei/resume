import styled, { keyframes } from "styled-components";

const heightChanger = keyframes`
0% { height : 10px; }
25%{  height : 40px ; transform:rotate(-10deg);  background-Color: violet;;}
50%{ height : 80px ; transform:rotate(0deg); background-Color: red;}
75%{ height : 40px ;transform:rotate(10deg); background-Color: violet;}
100% {height : 10px}
`;

export const StLoadingPageContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;
export const StLoading = styled.div`
  width: 40vw;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-evenly;
  & span {
    min-width: 2.5%;
    background-color: seagreen;
  }
  & span:nth-child(1) {
    animation: ${heightChanger} 1.5s linear infinite 0.2s;
  }
  & span:nth-child(2) {
    animation: ${heightChanger} 1.5s linear infinite 0.4s;
  }
  & span:nth-child(3) {
    animation: ${heightChanger} 1.5s linear infinite 0.6s;
  }
  & span:nth-child(4) {
    animation: ${heightChanger} 1.5s linear infinite 0.8s;
  }
  & span:nth-child(5) {
    animation: ${heightChanger} 1.5s linear infinite 1s;
  }
  & span:nth-child(6) {
    animation: ${heightChanger} 1.5s linear infinite 1.2s;
  }
  & span:nth-child(7) {
    animation: ${heightChanger} 1.5s linear infinite 1.4s;
  }
  & span:nth-child(8) {
    animation: ${heightChanger} 1.5s linear infinite 1.6s;
  }
  & span:nth-child(9) {
    animation: ${heightChanger} 1.5s linear infinite 1.8s;
  }
  & span:nth-child(10) {
    animation: ${heightChanger} 1.5s linear infinite 2s;
  }
`;
