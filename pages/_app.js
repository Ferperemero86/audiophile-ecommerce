import React from "react";

import { PersistGate } from "redux-persist/lib/integration/react";
import { createWrapper } from "next-redux-wrapper";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../utils/apollo-client";
import { Provider } from "react-redux";
import { store, persistor } from "../state/store";

import "../scss/styles.scss";

import Layout from "../components/layout/Layout";

function App({ Component, apollo, pageProps }) {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<ApolloProvider client={apollo}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ApolloProvider>
			</PersistGate>
		</Provider>
	);
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(withData(App));
