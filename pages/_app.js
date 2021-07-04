import React from "react";
// import App from "next/app";

import { createWrapper } from "next-redux-wrapper";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../utils/apollo-client";
import { Provider } from "react-redux";
import { store } from "../state/store";

import "../scss/styles.scss";

import Layout from "../components/layout/Layout";

function App({ Component, apollo, pageProps }) {
	return (
		<Provider store={store}>
			<ApolloProvider client={apollo}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ApolloProvider>
		</Provider>
	);
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(withData(App));
