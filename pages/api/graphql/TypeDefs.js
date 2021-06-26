import { gql } from "apollo-server-micro";

const typeDefs = gql`
	type Image {
		size: String
		url: String
	}

	type Accesory {
		quantity: Int
		item: String
	}

	type Gallery {
		first: Image
		second: Image
		third: Image
	}

	type RelatedProduct {
		slug: String
		name: String
		image: Image
	}

	type Product {
		id: Int
		slug: String
		image: [Image]
		name: String
		category: String
		new: Boolean
		price: Int
		description: String
		features: String
		includes: [Accesory]
		gallery: Gallery
		others: [RelatedProduct]
	}

	type Query {
		getProduct(id: Int): Product
		getProducts(category: String): [Product]
	}
`;

export default typeDefs;
