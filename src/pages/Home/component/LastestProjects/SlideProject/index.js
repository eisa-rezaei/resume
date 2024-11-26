import React from "react";
import {BiLinkExternal} from "react-icons/bi";
import {FaGithub} from "react-icons/fa";
import {
  StyledHomeLastestProjectSingleProject,
  StyledHomeLastestProjectSingleProjectFooter,
  StyledSingleProjectFooterInfo,
} from "./style";

const SliceProject = ({
  output,
  name,
  image,
  platform,
  src,
  index,
  activeSlide,
}) => {
  return (
    <StyledHomeLastestProjectSingleProject>
      <a
        href={output}
        className={activeSlide === index ? `active-slide` : null}
        target="_blank"
        rel="noreferrer"
        aria-label={name}
        title={name}
      >
        <img src={image} alt={name} />
      </a>
      <StyledHomeLastestProjectSingleProjectFooter
        className={activeSlide === index ? `active-slide-footer` : null}
      >
        <StyledSingleProjectFooterInfo>
          <p>{name}</p>
          <p>{platform}</p>
        </StyledSingleProjectFooterInfo>
        <span>
          <a href={src} target="_blank" rel="noreferrer" aria-label="github">
            <FaGithub />
          </a>
          <a href={output} target="_blank" rel="noreferrer" aria-label="website">
            <BiLinkExternal />
          </a>
        </span>
      </StyledHomeLastestProjectSingleProjectFooter>
    </StyledHomeLastestProjectSingleProject>
  );
};

export default SliceProject;
