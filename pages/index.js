import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { appData } from "../appData";

import Header from "../components/layout/header/Header";
import SectionOne from "../components/layout/sections/section-one/SectionOne";
import SectionTwo from "../components/layout/sections/section-two/SectionTwo";

// import { findItemInArray } from "../helpers";

console.log("APPDATA", appData);

const PRODUCTS_QUERY = gql`
	query getProducts {
		getProducts {
			id
			name
			image {
				mobile
				tablet
				desktop
			}
		}
	}
`;

export default function Home() {
	const { data, loading } = useQuery(PRODUCTS_QUERY);

	const headerProduct = appData.headers.headerPrimary;
	const headerButton = appData.buttons.seeProduct;

	if (!loading) {
		console.log("DATA", data);
		// const products = data.getProducts;
		// const headerProductContent = findItemInArray(products, 4);

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
				</main>
			</div>
		);
	}

	return null;
}
