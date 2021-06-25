import React from "react";
import App from "next/app";

import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../utils/apollo-client";

import "../scss/styles.scss";

import MainMenu from "../components/layout/main-menu/MainMenu";
import Footer from "../components/layout/footer/Footer";

class MyApp extends App {
	render() {
		const { Component, apollo } = this.props;

		return (
			<ApolloProvider client={apollo}>
				<div className="wrapper">
					<MainMenu />
					<Component />
					<Footer />
				</div>
			</ApolloProvider>
		);
	}
}

export default withData(MyApp);
