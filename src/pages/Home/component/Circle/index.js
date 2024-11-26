import React from "react";
import { ImArrowUpRight2 } from "react-icons/im";
import { StCirCleContainer, StCirCleContent } from "./styles";

const Circle = () => {
  return (
    <StCirCleContainer id="Circle">
      <a href="mailto:Eisa.eisa.r.r@gamil.com" target="_blank" rel="noreferrer">
        <StCirCleContent>
          <p>Contact and call for coding</p>
          <h2>Call Me</h2>
          <ImArrowUpRight2 />
        </StCirCleContent>
      </a>
    </StCirCleContainer>
  );
};

export default Circle;
