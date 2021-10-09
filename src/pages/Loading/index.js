import React from "react";
import { StLoading, StLoadingPageContainer } from "./styles";

const Loading = () => {
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

export default Loading;
