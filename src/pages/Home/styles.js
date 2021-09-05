import styled from "styled-components";

export const StyledHomeCt = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-top: 5vh;
  @media (max-width: 600px) {
    padding-top: 1vh;
  }
`;

export const StyledSpliceBorder = styled.div`
  width: 100%;
  height: 2px;
  background-color: #d0d0d0;
`;
