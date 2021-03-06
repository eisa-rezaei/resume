import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { StFooterContainer, StyledFooterIconsBar } from "./styles";

const Footer = () => {
  return (
    <StFooterContainer>
      <h4>Personal Website</h4>
      <h4> CopyRight EisaRezaei {new Date().getFullYear()} </h4>
      <StyledFooterIconsBar>
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
      </StyledFooterIconsBar>
    </StFooterContainer>
  );
};

export default Footer;
