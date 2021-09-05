import React from "react";
import { Education } from "../../../../data/data";

import {
  StyledHomeEducation,
  StyledHomeEducationArticle,
  StyledHomeEducationSection,
} from "./styles";

const index = () => {
  return (
    <StyledHomeEducation>
      <h2>My Education & Experience</h2>
      <StyledHomeEducationSection>
        <StyledHomeEducationArticle>
          <header> 2017 - 2019 </header>
          {Education.first_part.map(({ title, caption }, index) => (
            <span key={index}>
              <h5>{title}</h5>
              <p>{caption}</p>
            </span>
          ))}
        </StyledHomeEducationArticle>
        <StyledHomeEducationArticle>
          <header> 2019 - 2020</header>
          {Education.secound_part.map(({ title, caption }, index) => (
            <span key={index}>
              <h5>{title}</h5>
              <p>{caption}</p>
            </span>
          ))}
        </StyledHomeEducationArticle>
        <StyledHomeEducationArticle>
          <header> 2020 - 2021 </header>
          {Education.third_part.map(({ title, caption }, index) => (
            <span key={index}>
              <h5>{title}</h5>
              <p>{caption}</p>
            </span>
          ))}
        </StyledHomeEducationArticle>
      </StyledHomeEducationSection>
    </StyledHomeEducation>
  );
};

export default index;
