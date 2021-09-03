import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { StyledHomeHeader, StyledHomeHeaderIconsBar } from "./styles";

const index = () => {
  return (
    <StyledHomeHeader>
      <span>
        <h5>works</h5>
        <h5>contact</h5>
      </span>
      <StyledHomeHeaderIconsBar>
        <FaInstagram />
        <FaTelegram />
        <a href="https://github.com/eisa-rezaei">
          <FaGithub />
        </a>
        <FaLinkedin />
      </StyledHomeHeaderIconsBar>
    </StyledHomeHeader>
  );
};

export default index;
