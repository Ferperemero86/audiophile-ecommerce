import React from "react";
import { gql } from "@apollo/client";
import Link from "next/link";

import client from "./api/graphql/client";

import SectionFive from "../components/layout/sections/section-five/SectionFive";
import SectionOne from "../components/layout/sections/section-one/SectionOne";
import SectionThree from "../components/layout/sections/section-three/SectionThree";

import { appData } from "../appData";

const QUERY = gql`
	query getProductDetails($id: Int) {
		getProduct(id: $id) {
			id
			category
			image {
				size
				url
			}
			name
			price
			description
			features
			includes {
				quantity
				item
			}
			gallery {
				first {
					mobile
					tablet
					desktop
				}
				second {
					mobile
					tablet
					desktop
				}
				third {
					mobile
					tablet
					desktop
				}
			}
			others {
				name
				image {
					mobile
					tablet
					desktop
				}
				id
				category
			}
		}
	}
`;

const Details = ({ category, data }) => {
	const casualContent = appData.casual;

	const product = data.getProduct;

	return (
		<div className="details">
			<Link href={{ pathname: "models", query: { category } }}>
				<a className="details-back-link container">Go Back</a>
			</Link>
			<main>
				<SectionFive product={product} stylesClass="container" />
				<SectionOne stylesClass="vertical-margin container" />
				<SectionThree
					stylesClass="container vertical-margin"
					content={casualContent}
				/>
			</main>
		</div>
	);
};

export const getServerSideProps = async (ctx) => {
	const { category, id } = await ctx.query;
	const idNumber = parseInt(id);
	const { data } = await client.query({
		query: QUERY,
		variables: { id: idNumber }
	});

	return { props: { category, data } };
};

export default Details;
