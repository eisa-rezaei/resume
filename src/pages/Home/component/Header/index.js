import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { StyledHomeHeader, StyledHomeHeaderIconsBar } from "./styles";

const index = () => {
  return (
    <StyledHomeHeader>
      <span>
        <a href="#LastestProjects">works</a>
        <a href="#Circle">contact</a>
      </span>
      <StyledHomeHeaderIconsBar>
        <a
          href="https://instagram.com/Eisa_rezaeei"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a href="https://t.me/Eisa_Rezaeei" target="_blank" rel="noreferrer">
          <FaTelegram />
        </a>
        <a
          href="https://github.com/eisa-rezaei"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/eisa-rezaei"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </StyledHomeHeaderIconsBar>
    </StyledHomeHeader>
  );
};

export default index;
