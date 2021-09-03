import styled from "styled-components";

export const StyledHomeHeader = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10vw;
  & span {
    width: 12vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-variant: small-caps;
    & h5 {
      :hover {
        color: #909090;
        cursor: pointer;
      }
    }
  }
  @media (max-width: 600px) {
    & span {
      width: 40vw;
      font-size: 0.8rem;
    }
  }
`;
export const StyledHomeHeaderIconsBar = styled.div`
  width: 10vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  & svg {
    cursor: pointer;
    :hover {
      color: #909090;
    }
  }
  @media (max-width: 600px) {
    width: 30vw;
  }
`;
