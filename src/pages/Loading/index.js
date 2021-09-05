import React from "react";
import { StLoading, StLoadingPageContainer } from "./styles";

const index = () => {
  return (
    <StLoadingPageContainer>
      <h2>Loading...</h2>
      <StLoading>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </StLoading>
    </StLoadingPageContainer>
  );
};

export default index;
