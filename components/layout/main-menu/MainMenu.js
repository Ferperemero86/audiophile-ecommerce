import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { showCart } from "../../../state/actions/cart-actions";

import Img from "../../ui/img/Img";
import Hamburger from "../../ui/hamburger/Hamburger";
import Menu from "../../ui/menu/Menu";
import Cart from "../../ui/cart/Cart";

import { appData } from "../../../appData";

const { logo, icons, menus } = appData;

const { cart } = icons;
const { mainMenu } = menus;

const MainMenu = () => {
	const dispatch = useDispatch();
	const cartDisplay = useSelector((state) => state.cart.display);

	const displayCart = () => dispatch(showCart());

	return (
		<div className="main-menu container">
			<Hamburger />
			<Img url={logo.url} stylesClass="main-menu-logo" />
			<Menu links={mainMenu.links} stylesClass="main-menu-menu" />
			<Img url={cart.url} stylesClass="main-menu-cart" onClick={displayCart} />
			{cartDisplay && <Cart />}
		</div>
	);
};

export default MainMenu;
