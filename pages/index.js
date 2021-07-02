import React from "react";
import { useSelector } from "react-redux";

import { appData } from "../appData";

import Header from "../components/layout/header/Header";
import SectionOne from "../components/layout/sections/section-one/SectionOne";
import SectionTwo from "../components/layout/sections/section-two/SectionTwo";
import SectionThree from "../components/layout/sections/section-three/SectionThree";

const Home = () => {
	const state = useSelector((state) => state);
	const headerProduct = appData.headers.headerPrimary;
	const headerButton = appData.buttons.seeProduct;
	const casualContent = appData.casual;
	console.log("STATE", state);
	return (
		<div className="home">
			<Header
				product={headerProduct}
				button={headerButton}
				type="header-primary"
			/>
			<main>
				<SectionOne stylesClass="container" />
				<SectionTwo stylesClass="container vertical-margin" />
				<SectionThree
					stylesClass="container vertical-margin"
					content={casualContent}
				/>
			</main>
		</div>
	);
};

export default Home;
