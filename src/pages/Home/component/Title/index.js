import React from "react";
import { StyledHomeTitle } from "./styles";

const index = () => {
  return (
    <StyledHomeTitle>
      <h2>Eisa Rezaei </h2>
      <h2>React.js developer </h2>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a href="./resume/Eisa_Rezaei.pdf" target="_blank">
        Download Resume
      </a>
    </StyledHomeTitle>
  );
};

export default index;
