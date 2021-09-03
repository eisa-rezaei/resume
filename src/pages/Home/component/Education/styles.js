import styled from "styled-components";

export const StyledHomeEducation = styled.div`
  width: 100%;
  height: auto;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 70px 10vw;
  & h2 {
    font-size: 1.8rem;
  }
  @media (max-width: 600px) {
    padding: 30px 5vw;
    & h2 {
      font-size: 1rem;
    }
  }
`;
export const StyledHomeEducationSection = styled.section`
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
export const StyledHomeEducationArticle = styled.article`
  width: 350px;
  min-height: 500px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-transform: none;
  & header {
    color: #a0a0a0;
  }
  & span {
    margin: 20px 0;
    font-size: 1.2rem;
    & p {
      margin-top: 10px;
      color: #909090;
    }
  }
  @media (max-width: 600px) {
    & header {
      font-size: 0.8rem;
    }
    & h5 {
      font-size: 0.8rem;
    }
  }
`;
