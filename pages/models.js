import React from "react";

import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

import Header from "../components/layout/header/Header";
import SectionFour from "../components/layout/sections/section-four/SectionFour";
import SectionOne from "../components/layout/sections/section-one/SectionOne";
import SectionThree from "../components/layout/sections/section-three/SectionThree";

import { appData } from "../appData";

const QUERY = gql`
	query getModels($category: String) {
		getProducts(category: $category) {
			id
			image {
				size
				url
			}
			category
			name
			price
			description
		}
	}
`;

const Models = () => {
	const router = useRouter();
	const { query } = router;
	const headerTitle = query.category.toUpperCase();
	const casualContent = appData.casual;

	const { data, loading } = useQuery(QUERY, {
		variables: {
			category: query.category
		}
	});

	if (!loading) {
		const modelsItems = data.getProducts;

		return (
			<div className="models">
				<Header type="header-second" title={headerTitle} />
				<main>
					<SectionFour modelsItems={modelsItems} />
					<SectionOne stylesClass="container vertical-margin" />
					<SectionThree
						stylesClass="container vertical-margin"
						content={casualContent}
					/>
				</main>
			</div>
		);
	}

	return null;
};

export default Models;
