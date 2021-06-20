import React from "react";

import Img from "../../ui/img/Img";
import Hamburger from "../../ui/hamburger/Hamburger";
import Menu from "../../ui/menu/Menu";

import { appData } from "../../../appData";

const { logo, icons, menus } = appData;

const { cart } = icons;
const { mainMenu } = menus;

const MainMenu = () => {
	return (
		<div className="main-menu container">
			<Hamburger />
			<Img url={logo.url} stylesClass="main-menu-logo" />
			<Menu links={mainMenu.links} stylesClass="main-menu-menu" />
			<Img url={cart.url} stylesClass="main-menu-cart" />
		</div>
	);
};

export default MainMenu;
