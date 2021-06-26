import lodash from "lodash/collection";

import { data } from "../data";

const resolvers = {
	Query: {
		getProduct: (_, { id }) => {
			return lodash.find(data, { id });
		},
		getProducts: (_, { category }) => {
			if (!category) {
				return data;
			}

			return data.filter((item) => item.category === category);
		}
	}
};

export default resolvers;
