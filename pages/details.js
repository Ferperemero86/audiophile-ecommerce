import React from "react";

import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";

import SectionFive from "../components/layout/sections/section-five/SectionFive";
import SectionOne from "../components/layout/sections/section-one/SectionOne";

// import { appData } from "../appData";

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

const Details = () => {
	const router = useRouter();
	const { query } = router;
	// const casualContent = appData.casual;
	const { data, loading } = useQuery(QUERY, {
		variables: {
			id: parseInt(query.id)
		}
	});

	if (!loading) {
		const product = data.getProduct;
		// const productDetails = data.getProduct;

		return (
			<div className="details">
				<Link
					href={{ pathname: "/models", query: { category: query.category } }}
				>
					<a className="details-back-link container">Go Back</a>
				</Link>
				<main>
					<SectionFive product={product} stylesClass="container" />
					<SectionOne stylesClass="vertical-margin container" />
				</main>
			</div>
		);
	}

	return null;
};

export default Details;
