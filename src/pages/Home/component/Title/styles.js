import styled from "styled-components";

export const StyledHomeTitle = styled.div`
  width: 100%;
  height: 40vh;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10vw;
  & h2 {
    width: 100%;
    font-size: 2.5rem;
    text-align: center;
    font-family: "Kaisei HarunoUmi", serif;
  }

  @media (max-width: 600px) {
    height: 20vh;
    padding: 0;
    & h2 {
      width: 100%;
      font-size: 1rem;
      text-align: center;
    }
  }
`;
