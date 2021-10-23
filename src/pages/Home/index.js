import React from "react";
import { Suspense, lazy } from "react";

import Loading from "../Loading";

import { StyledHomeCt, StyledSpliceBorder } from "./styles";
import Footer from "./component/Footer";

const Header = lazy(() => import("./component/Header"));
const Title = lazy(() => import("./component/Title"));
const UserDetail = lazy(() => import("./component/UserDetail"));
const Advantage = lazy(() => import("./component/Advantage"));
const Education = lazy(() => import("./component/Education"));
const Circle = lazy(() => import("./component/Circle"));
import LastestProject from "./component/LastestProjects";

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
