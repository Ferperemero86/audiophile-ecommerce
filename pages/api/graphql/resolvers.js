import lodash from "lodash/collection";

import { data } from "../data";

const resolvers = {
	Query: {
		getProduct: (_, { id }) => {
			return lodash.find(data, { id });
		},
		getProducts: (_, args) => data
	}
};

export default resolvers;
