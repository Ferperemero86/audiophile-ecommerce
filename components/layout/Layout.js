import React from "react";
import { useSelector } from "react-redux";

import MainMenu from "../layout/main-menu/MainMenu";
import Footer from "../layout/footer/Footer";

function Layout({ children }) {
	const state = useSelector((state) => state);
	// const cartState = state.cart;
	// const blurBackground = cartState.display ? "blur" : "";

	console.log("STATE", state);

	return (
		<div className="layout wrapper">
			<MainMenu />
			<div className={`layout-content`}>{children}</div>
			<Footer />
		</div>
	);
}

export default Layout;
