import React from "react";
import { useSelector } from "react-redux";

import { appData } from "../appData";

import Form from "../components/ui/form/Form";
import Summary from "../components/ui/summary/Summary";
import CheckoutConfirm from "../components/ui/checkout-comfirm/CheckoutConfirm";

const checkoutFormContent = appData.forms.checkout;

const Checkout = () => {
	const state = useSelector((state) => state.checkoutForm);
	const { confirmation } = state;
	const { display } = confirmation;
	const blur = display ? "blur" : "";

	return (
		<div className={`checkout container ${blur}`}>
			<h1 className="checkout-heading">CHECKOUT</h1>
			{confirmation.display && <CheckoutConfirm />}
			<Form content={checkoutFormContent} stylesClass="checkout-form" />
			<Summary />
		</div>
	);
};

export default Checkout;
