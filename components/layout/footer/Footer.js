import React from "react";

import Img from "../../ui/img/Img";
import Menu from "../../ui/menu/Menu";

import { appData } from "../../../appData";

const { footer } = appData;
const { logo, menu, text, copyRight, menuSocial } = footer;

const Footer = () => {
	return (
		<div className="footer container">
			<div className="footer-first">
				<Img url={logo} stylesClass="footer-first-logo" />
				<Menu links={menu.links} stylesClass="footer-first-menu" />
				<p className="footer-first-text">{text}</p>
			</div>
			<div className="footer-second">
				<p className="footer-second-copyright">{copyRight}</p>
				<Menu links={menuSocial.links} stylesClass="footer-second-menu" />
			</div>
		</div>
	);
};

export default Footer;
