import styled from "styled-components";

export const StyledHomeCt = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 5vh 0;
  @media (max-width: 600px) {
    padding: 1vh 0;
  }
`;

export const StyledSpliceBorder = styled.div`
  width: 100%;
  height: 2px;
  background-color: #d0d0d0;
`;
