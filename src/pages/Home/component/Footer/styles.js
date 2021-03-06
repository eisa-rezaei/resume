import styled from "styled-components";

export const StFooterContainer = styled.main`
  width: 100vw;
  height: auto;
  padding: 30px;
  font-size: 0.9rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    padding: 15px;
    font-size: 0.6rem;
    & h4:first-child {
      display: NONE;
    }
  }
`;

export const StyledFooterIconsBar = styled.div`
  width: 15vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  & svg {
    cursor: pointer;
    :hover {
      color: #909090;
    }
  }
  @media (max-width: 600px) {
    width: 30vw;
    font-size: 1rem;
  }
`;
