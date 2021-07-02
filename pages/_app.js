import React from "react";
import App from "next/app";

import { createWrapper } from "next-redux-wrapper";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../utils/apollo-client";
import { Provider } from "react-redux";
import { store } from "../state/store";

import "../scss/styles.scss";

import MainMenu from "../components/layout/main-menu/MainMenu";
import Footer from "../components/layout/footer/Footer";

class MyApp extends App {
	render() {
		const { Component, apollo } = this.props;

		return (
			<Provider store={store}>
				<ApolloProvider client={apollo}>
					<div className="wrapper">
						<MainMenu />
						<Component />
						<Footer />
					</div>
				</ApolloProvider>
			</Provider>
		);
	}
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(withData(MyApp));
