import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const PRODUCTS_QUERY = gql`
	query getProducts {
		getProducts {
			id
			slug
			image {
				mobile
				tablet
				desktop
			}
			name
			category
			new
			price
			description
			includes {
				quantity
				item
			}
			gallery {
				first {
					mobile
					desktop
					tablet
				}
				second {
					mobile
					desktop
					tablet
				}
				third {
					mobile
					desktop
					tablet
				}
			}
			others {
				slug
				name
				image {
					mobile
					tablet
					desktop
				}
			}
		}
	}
`;

export default function Home() {
	const { data, loading } = useQuery(PRODUCTS_QUERY);

	if (!loading) {
		console.log("DATA", data);
	}
	return <h1>Home</h1>;
}
