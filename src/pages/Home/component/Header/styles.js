import styled from "styled-components";

export const StyledHomeHeader = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  font-size: 1.5rem;
  & span {
    width: 15vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-variant: small-caps;
    & h5 {
      margin-left: 20px;
      :hover {
        color: #909090;
        cursor: pointer;
      }
    }
  }
  @media (max-width: 600px) {
    padding: 0 5vw;
    font-size: 1.1rem;
    & span {
      width: 40vw;
      justify-content: space-around;

      & h5 {
        margin-left: 0px;
      }
    }
  }
`;
export const StyledHomeHeaderIconsBar = styled.div`
  width: 15vw;
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
