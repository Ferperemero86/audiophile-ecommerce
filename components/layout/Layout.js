import React from "react";
import { useSelector } from "react-redux";

import MainMenu from "../layout/main-menu/MainMenu";
import Footer from "../layout/footer/Footer";

const Layout = ({ children }) => {
	const state = useSelector((state) => state);
	const cartDisplay = state.cart.display;
	const blurBackground = cartDisplay ? "blur" : "";

	console.log("STATE", state);

	return (
		<div className="layout wrapper">
			<MainMenu />
			<div className={`layout-content ${blurBackground}`}>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
