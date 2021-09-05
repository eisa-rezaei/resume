import styled from "styled-components";

export const StFooterContaienr = styled.main`
  width: 100vw;
  min-height: 80px;
  padding: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  }
`;
