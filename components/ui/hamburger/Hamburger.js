import React from "react";
import { useDispatch } from "react-redux";

import { displayMainMenu } from "../../../state/actions/menu-actions";

const Hamburger = () => {
	const dispatch = useDispatch();

	const displayMenu = () => {
		dispatch(displayMainMenu());
	};

	return (
		<div className="hamburger main-menu-hamburger" onClick={displayMenu}>
			<span className="hamburger-bar"></span>
			<span className="hamburger-bar"></span>
			<span className="hamburger-bar"></span>
		</div>
	);
};

export default Hamburger;
