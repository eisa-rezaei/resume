import React from "react";
import Header from "./component/Header";
import Title from "./component/Title";
import UserDetail from "./component/UserDetail";
import Advantage from "./component/Advantage";
import Education from "./component/Education";
import LastestProject from "./component/LastestProjects";

import { StyledHomeCt, StyledSpliceBorder } from "./styles";

const Home = () => {
  return (
    <StyledHomeCt>
      <Header />
      <StyledSpliceBorder />
      <Title />
      <UserDetail />
      <StyledSpliceBorder />
      <Advantage />
      <StyledSpliceBorder />
      <Education />
      <StyledSpliceBorder />
      <LastestProject />
      <StyledSpliceBorder />
    </StyledHomeCt>
  );
};
export default Home;
