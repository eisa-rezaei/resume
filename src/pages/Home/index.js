import React from "react";
import { Suspense } from "react";

import Loading from "../Loading";

import { StyledHomeCt, StyledSpliceBorder } from "./styles";
import Footer from "./component/Footer";
import LastestProject from "./component/LastestProjects";
import Header from "./component/Header";
import Title from "./component/Title";
import UserDetail from "./component/UserDetail";
import Advantage from "./component/Advantage";
import Education from "./component/Education";
import Circle from "./component/Circle";

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
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
        <Circle />
        <StyledSpliceBorder />
        <Footer />
      </StyledHomeCt>
    </Suspense>
  );
};
export default Home;
