import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { appData } from "../appData";

import Form from "../components/ui/form/Form";
import Summary from "../components/ui/summary/Summary";
import CheckoutConfirm from "../components/ui/checkout-comfirm/CheckoutConfirm";
import { removeAllCartProducts } from "../state/actions/cart-actions";
import { resetForm } from "../state/actions/form-actions";

const checkoutFormContent = appData.forms.checkout;

const Checkout = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { items } = useSelector((state) => state.cart);
	const state = useSelector((state) => state.checkoutForm);
	const { confirmation, formValid } = state;
	const { display } = confirmation;
	const blur = items.length === 0 && display ? "blur" : "";

	useEffect(() => {
		console.log("STATE", state);
		if (items.length === 0 && display === false) {
			router.push("/");
		}
		if (formValid && items.length > 0) {
			dispatch(removeAllCartProducts());
			dispatch(resetForm());
			router.push("/checkout");
		}
	});

	return (
		<div className={`checkout container ${blur}`}>
			<h1 className="checkout-heading">CHECKOUT</h1>
			{items.length === 0 && display && <CheckoutConfirm />}
			<Form content={checkoutFormContent} stylesClass="checkout-form" />
			{!formValid && items.length > 0 && <Summary />}
		</div>
	);
};

export default Checkout;
