import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { showCart } from "../../../state/actions/cart-actions";

import Img from "../../ui/img/Img";
import Hamburger from "../../ui/hamburger/Hamburger";
import Menu from "../../ui/menu/Menu";
import Cart from "../../ui/cart/Cart";

import { appData } from "../../../appData";

import Categories from "../../ui/product/categories/Categories";

const { logo, icons, menus } = appData;
const { cart } = icons;
const { mainMenu } = menus;

const MainMenu = () => {
	const dispatch = useDispatch();
	const cartState = useSelector((state) => state.cart);
	const menuState = useSelector((state) => state.menu);
	const cartDisplay = cartState.display;
	const cartItems = cartState.items;
	const menuDisplay = menuState.mainMenu.display;

	const displayCart = () => dispatch(showCart());

	return (
		<div className="main-menu-container">
			<div className="main-menu container">
				<Hamburger />
				<Img url={logo.url} stylesClass="main-menu-logo" />
				<Menu links={mainMenu.links} stylesClass="main-menu-menu" />
				<div className="main-menu-cart">
					{cartItems.length > 0 && (
						<span className="quantity">{cartItems.length}</span>
					)}
					<Img url={cart.url} onClick={displayCart} />
				</div>
				{cartDisplay && <Cart />}
			</div>
			<div className="vertical-main-menu">
				{menuDisplay && <Categories stylesClass="container" />}
			</div>
		</div>
	);
};

export default MainMenu;
