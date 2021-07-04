import React from "react";
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

const Models = ({ category }) => {
	const headerTitle = category ? category.toUpperCase() : "";
	const casualContent = appData.casual;

	const { data, loading } = useQuery(QUERY, {
		variables: {
			category
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

export const getServerSideProps = async (ctx) => {
	const { category } = ctx.query;

	return { props: { category } };
};

export default Models;
