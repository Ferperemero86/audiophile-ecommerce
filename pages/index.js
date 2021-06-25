import React from "react";

import { appData } from "../appData";

import Header from "../components/layout/header/Header";
import SectionOne from "../components/layout/sections/section-one/SectionOne";
import SectionTwo from "../components/layout/sections/section-two/SectionTwo";
import SectionThree from "../components/layout/sections/section-three/SectionThree";

export default function Home() {
	const headerProduct = appData.headers.headerPrimary;
	const headerButton = appData.buttons.seeProduct;
	const casualContent = appData.casual;

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
}
