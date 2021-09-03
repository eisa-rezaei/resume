import React from "react";
import { FaReact } from "react-icons/fa";
import { SiRedux, SiStyledComponents } from "react-icons/si";
import { ImHtmlFive2 } from "react-icons/im";
import { RiGatsbyFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";

import {
  StyledHomeMyAdvantage,
  StyledHomeMyAdvantageIconsBar,
  StyledHomeMyAdvantageSingle,
} from "./styles";

const ADVANTAGE = [
  { icon: <ImHtmlFive2 />, title: "HTML5 / CSS3", persent: "85" },
  { icon: <IoLogoJavascript />, title: "JS", persent: "60" },
  { icon: <FaReact />, title: "React", persent: "70" },
  { icon: <SiRedux />, title: "Redux", persent: "40" },
  { icon: <SiStyledComponents />, title: "styled", persent: "80" },
  { icon: <RiGatsbyFill />, title: "GATSBY", persent: "30" },
];

const index = () => {
  return (
    <StyledHomeMyAdvantage>
      <h2>My Advantage</h2>
      <StyledHomeMyAdvantageIconsBar>
        {ADVANTAGE.map(({ icon, title, persent }, index) => (
          <StyledHomeMyAdvantageSingle key={index}>
            <span>
              {icon}
              <p>{persent}%</p>
            </span>
            <p>{title}</p>
          </StyledHomeMyAdvantageSingle>
        ))}
      </StyledHomeMyAdvantageIconsBar>
    </StyledHomeMyAdvantage>
  );
};

export default index;
