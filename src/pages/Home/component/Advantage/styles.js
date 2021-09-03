import styled, { keyframes } from "styled-components";

const rotate = keyframes`
from{
transform: rotate(0deg);
}
to {
transform: rotate(180deg);
}
`;

export const StyledHomeMyAdvantage = styled.div`
  width: 100%;
  height: auto;
  font-size: 1.5rem;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 70px 0;
  @media (max-width: 600px) {
    padding: 40px 0;
    font-size: 1rem;
  }
`;
export const StyledHomeMyAdvantageIconsBar = styled.section`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 40px;
  padding: 0 5vw;
  @media (max-width: 600px) {
    height: auto;
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    padding: 0;
  }
`;
export const StyledHomeMyAdvantageSingle = styled.article`
  width: 15vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;

  & p {
    width: 100%;
    text-align: center;
  }

  & span {
    width: 90%;
    height: 100%;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #e0e0e0;
    border-radius: 80px;

    & svg {
      font-size: 3.5rem;
      transition: all 0.2s ease;
    }
    :hover {
      background: rgb(252, 245, 232);
      background: radial-gradient(
        circle,
        rgba(252, 245, 232, 1) 26%,
        rgba(237, 205, 252, 0.05694152661064422) 62%
      );
      cursor: pointer;
      & svg {
        color: seagreen;
        font-size: 4rem;
      }
      & p {
        color: orange;
      }
    }
  }
  :nth-child(3) {
    & span {
      background: rgb(252, 245, 232);
      background: radial-gradient(
        circle,
        rgba(252, 245, 232, 1) 26%,
        rgba(237, 205, 252, 0.05694152661064422) 62%
      );
      & svg {
        color: seagreen;
        animation: ${rotate} linear 2s infinite;
      }
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    display: flex;
    align-items: center;
    & p {
      width: 120px;
      text-align: center;
    }
    & span {
      max-width: 120px;
      height: 180px;

      & p {
        font-size: 0.8rem;
      }

      & svg {
        font-size: 2.5rem;
      }

      :hover {
        & svg {
          font-size: 3rem;
        }
      }
    }
  }
`;
