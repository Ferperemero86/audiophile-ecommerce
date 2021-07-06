import React from "react";
import { useSelector } from "react-redux";

import MainMenu from "../layout/main-menu/MainMenu";
import Footer from "../layout/footer/Footer";

const Layout = ({ children }) => {
	const state = useSelector((state) => state);
	const cartDisplay = state.cart.display;
	const blurBackground = cartDisplay ? "blur" : "";
	const staticBackground = cartDisplay ? "fixed o-flow-hidden" : "";

	return (
		<div className={`layout wrapper ${staticBackground}`}>
			<MainMenu />
			<div className={`layout-content ${blurBackground}`}>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
