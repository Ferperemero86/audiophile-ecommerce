import React from "react";

import { appData } from "../appData";

import Form from "../components/ui/form/Form";

const checkoutFormContent = appData.forms.checkout;

const Checkout = () => {
	return (
		<div className="checkout">
			<h1 className="checkout-heading">CHECKOUT</h1>
			<Form
				content={checkoutFormContent}
				stylesClass="container checkout-form"
			/>
		</div>
	);
};

export default Checkout;
