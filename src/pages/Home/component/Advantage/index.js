import React from "react";
import { ADVANTAGE } from "../../../../data/data";

import {
  StyledHomeMyAdvantage,
  StyledHomeMyAdvantageIconsBar,
  StyledHomeMyAdvantageSingle,
} from "./styles";

const index = () => {
  return (
    <StyledHomeMyAdvantage>
      <h2>My Advantage</h2>
      <StyledHomeMyAdvantageIconsBar>
        {ADVANTAGE.map(({ icon, title, percent }, index) => (
          <StyledHomeMyAdvantageSingle key={index}>
            <span>
              {icon}
              <p>{percent}%</p>
            </span>
            <p>{title}</p>
          </StyledHomeMyAdvantageSingle>
        ))}
      </StyledHomeMyAdvantageIconsBar>
    </StyledHomeMyAdvantage>
  );
};

export default index;
