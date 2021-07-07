import React from "react";
import { gql } from "@apollo/client";

import client from "../pages/api/graphql/client";

import Header from "../components/layout/header/Header";
import SectionFour from "../components/layout/sections/section-four/SectionFour";
import SectionOne from "../components/layout/sections/section-one/SectionOne";
import SectionThree from "../components/layout/sections/section-three/SectionThree";

import { appData } from "../appData";

const Models = ({ category, data }) => {
	const headerTitle = category ? category.toUpperCase() : "";
	const casualContent = appData.casual;
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
};

export const getServerSideProps = async (ctx) => {
	const { category } = await ctx.query;
	const { data } = await client.query({
		query: gql`
			query products($category: String) {
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
		`,
		variables: { category }
	});

	return { props: { category, data } };
};

export default Models;
