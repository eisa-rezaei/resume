import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { StFooterContainer, StyledFooterIconsBar } from "./styles";

const Footer = () => {
	return (
		<StFooterContainer>
			<span> Rights Since-2020-{new Date().getFullYear()} </span>
			<StyledFooterIconsBar>
				<a
					href="https://instagram.com/Eisa_rezaeei"
					target="_blank"
					rel="noreferrer"
					title="intstagram"
					aria-label="intstagram"
				>
					<FaInstagram />
				</a>
				<a
					href="https://t.me/Eisa_Rezaeei"
					target="_blank"
					rel="noreferrer"
					title="telegram"
					aria-label="telegram"
				>
					<FaTelegram />
				</a>
				<a
					href="https://github.com/eisa-rezaei"
					target="_blank"
					rel="noreferrer"
					title="github"
					aria-label="github"
				>
					<FaGithub />
				</a>
				<a
					href="https://linkedin.com/in/eisa-rezaei"
					target="_blank"
					rel="noreferrer"
					title="linkdin"
					aria-label="linkdin"
				>
					<FaLinkedin />
				</a>
			</StyledFooterIconsBar>
		</StFooterContainer>
	);
};

export default Footer;
