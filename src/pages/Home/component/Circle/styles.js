import styled, { keyframes } from "styled-components";

const fade = keyframes`
from {transform:translateX(-100%);}
to {transform:translateX(100%);}
`;

export const StCirCleContainer = styled.main`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 80px auto;
`;
export const StCirCleContent = styled.div`
  width: 250px;
  height: 250px;
  padding: 10px 70px;
  font-size: 1.5rem;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  background-color: #f0f0f0;
  border: 2px solid #eaeaea;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  ::after {
    height: 100%;
    width: 100%;
    content: "";
    position: absolute;
    background: linear-gradient(
      -90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    z-index: 1;
    animation: ${fade} 1.5s infinite;
  }

  & p {
    width: 80px;
    font-size: 0.5rem;
    color: #a0a0a0;
    z-index: 2;
  }
  & h2 {
    margin-top: 10px;
    font-family: "Kaisei HarunoUmi", serif;
    line-height: 2.2rem;
    z-index: 2;
  }
  & svg {
    font-size: 2rem;
    margin-top: 30px;
    z-index: 2;
  }
`;
