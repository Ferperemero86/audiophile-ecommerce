import React from "react";

import { appData } from "../appData";

import Form from "../components/ui/form/Form";
import Summary from "../components/ui/summary/Summary";

const checkoutFormContent = appData.forms.checkout;

const Checkout = () => {
	return (
		<div className="checkout container">
			<h1 className="checkout-heading">CHECKOUT</h1>
			<Form content={checkoutFormContent} stylesClass="checkout-form" />
			<Summary />
		</div>
	);
};

export default Checkout;
