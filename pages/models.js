import React from "react";

import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

import Header from "../components/layout/header/Header";
import SectionFour from "../components/layout/sections/section-four/SectionFour";

const QUERY = gql`
	query getModels($category: String) {
		getProducts(category: $category) {
			id
			image {
				size
				url
			}
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

	const { data, loading } = useQuery(QUERY, {
		variables: {
			category: query.category
		}
	});

	if (!loading) {
		const modelsItems = data.getProducts;
		console.log("DATA", data);

		return (
			<div className="models">
				<Header type="header-second" title={headerTitle} />
				<SectionFour modelsItems={modelsItems} />
			</div>
		);
	}

	return null;
};

export default Models;
