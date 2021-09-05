import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { StFooterContaienr, StyledFooterIconsBar } from "./styles";

const Footer = () => {
  return (
    <StFooterContaienr>
      <span>Personal Website</span>
      <span> CopyRight EisaRezaei {new Date().getFullYear()} </span>
      <StyledFooterIconsBar>
        <a
          href="https://instagram.com/eisa-rezaeei"
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
    </StFooterContaienr>
  );
};

export default Footer;
