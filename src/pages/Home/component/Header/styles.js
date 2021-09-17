import styled from "styled-components";

export const StyledHomeHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 50px;
  font-size: 1.5rem;
  & span {
    width: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-variant: small-caps;
    & a {
      margin-left: 20px;
      font-size: 1.2rem;
      font-weight: 600;
      :hover {
        color: #909090;
        cursor: pointer;
      }
    }
  }
  @media (max-width: 600px) {
    padding: 10px 5vw;
    font-size: 1.1rem;
    & span {
      width: 40vw;
      justify-content: space-around;
      & a {
        margin-left: 0px;
        font-size: 0.8rem;
      }
    }
  }
`;
export const StyledHomeHeaderIconsBar = styled.div`
  width: 15vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  & a {
    display: flex;
    align-items: center;
  }
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
