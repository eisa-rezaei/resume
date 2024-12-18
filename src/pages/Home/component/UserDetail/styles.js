import styled, { keyframes } from "styled-components";
const fade = keyframes`
from {transform:translateX(-100%);}
to {transform:translateX(100%);}
`;

export const StyledHomeUserDetail = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;

  margin-bottom: 60px;
  & span:nth-child(1) {
    display: none;
  }
  & span {
    width: 50vw;
    height: 100%;
    background-color: #eef3ee;
    border-radius: 300px;
    overflow: hidden;
    border: 1px solid gray;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border: 30px solid #fff;
      border-radius: 300px;
      z-index: 2;
      ::after {
        height: 100%;
        width: 100%;
        content: "";
        position: absolute;
        background: linear-gradient(
          -90deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 1) 50%,
          rgba(255, 255, 255, 0) 100%
        );
        z-index: 1;
        animation: ${fade} 1.5s infinite;
      }
    }
  }

  @media (max-width: 900px) {
    & span {
      width: 100%;
      height: 90%;
      & img {
        border: 10px solid #fff;
      }
    }
  }
  @media (max-width: 600px) {
    height: auto;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    & span:nth-child(2) {
      display: none;
    }
    & span:nth-child(1) {
      width: 100%;
      display: flex;

      & img {
        width: 100%;
        height: 100%;
        border: 15px solid #fff;
        border-radius: 300px;
      }
    }
  }
`;
export const StyledHomeUserDetailSinglePart = styled.article`
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px 5vw;

  @media (max-width: 600px) {
    min-width: 100%;
    min-height: 400px;
    overflow: hidden;
    padding: 10px 0;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const StyledHomeUserDetailSinglePartDetail = styled.div`
  width: 100%;
  min-height: ${(props) => (props.psize ? `150px` : `180px`)};
  display: inherit;
  flex-direction: column;
  align-items: ${(props) => props.align};
  justify-content: space-evenly;
  & h5 {
    width: 6rem;
    color: #02559e;
    font-size: 0.85rem;
    font-variant: small-caps;
    text-align: ${(props) => props.textalign};
  }
  & p {
    width: 100%;
    line-height: 1.6rem;
    text-transform: capitalize;
    font-size: ${(props) => props.psize};
    text-align: ${(props) => props.textalign};
  }
  @media (max-width: 600px) {
    width: 100%;
    align-items: center;
    justify-content: space-around;

    & h5 {
      width: 100%;
      text-align: center;
    }
    & p {
      width: 100%;
      padding: 0 22vw;
      text-align: center;
    }
  }
`;
