import styled from "styled-components";

export const StyledHomeLastestProjectCt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
  & h2 {
    font-size: 2.3rem;
    margin-bottom: 40px;
    font-family: "Kaisei HarunoUmi", serif;
  }
  @media (max-width: 600px) {
    & h2 {
      font-size: 1rem;
    }
  }
`;

export const StyledHomeLastestProject = styled.section`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  .pagenation {
    margin-top: 60px;
  }
`;

export const StyledHomeLastestProjectSingleProject = styled.article`
  width: inherit;
  height: 380px;
  position: relative;
  overflow: hidden;
  & a {
    width: 100%;
    height: 100%;
    filter: grayscale(100%);
    display: flex;
    align-items: center;
  }
  & img {
    width: inherit;
    height: 380px;
    border-radius: 10px;
  }
  .active-slide {
    filter: grayscale(0%);
  }
  .active-slide-footer {
    transform: translateY(0%);
  }

  @media (max-width: 600px) {
    height: 280px;
    overflow: hidden;
    & img {
      height: 280px;
    }
  }
`;
export const StyledHomeLastestProjectSingleProjectFooter = styled.footer`
  width: 100%;
  height: 50px;
  padding: 10px;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  transform: translateY(100%);
  transition: all 0.3s linear;
  background-color: lightseagreen;
  border-radius: 0px 0px 10px 10px;
  & span {
    width: 60px;
    display: flex;
    justify-content: space-between;
    & svg {
      :hover {
        color: #fff;
      }
    }
  }
  @media (max-width: 600px) {
    & span {
      width: 40px;
      & svg {
        font-size: 0.8rem;
      }
    }
  }
`;
export const StyledSingleProjectFooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  & p {
    font-size: 0.8rem;
  }
  @media (max-width: 600px) {
    & p {
      font-size: 0.6rem;
    }
  }
`;
