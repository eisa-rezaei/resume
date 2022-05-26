import React from "react";
import {ADVANTAGE} from "../../../../data/data";

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
        {ADVANTAGE.map(({icon, title}, index) => (
          <StyledHomeMyAdvantageSingle key={index}>
            <span>
              {icon}
              <p>{title}</p>
            </span>
          </StyledHomeMyAdvantageSingle>
        ))}
      </StyledHomeMyAdvantageIconsBar>
    </StyledHomeMyAdvantage>
  );
};

export default index;
