import { gql } from "apollo-server-micro";

const typeDefs = gql`
	type Image {
		size: String
		url: String
	}

	type GalleryImg {
		mobile: String
		tablet: String
		desktop: String
	}

	type Accesory {
		quantity: Int
		item: String
	}

	type Gallery {
		first: GalleryImg
		second: GalleryImg
		third: GalleryImg
	}

	type RelatedProduct {
		slug: String
		name: String
		image: GalleryImg
		category: String
		id: Int
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
