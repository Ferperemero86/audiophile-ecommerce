import React from "react";
import { useRouter } from "next/router";

import Button from "../button/Button";

const CheckoutConfirm = () => {
	const router = useRouter();

	const goHome = () => router.push("/");

	return (
		<div className="checkout-confirm">
			<h2 className="checkout-confirm-heading">THANK YOU FOR YOUR ORDER</h2>
			<p className="checkout-confirm-text">
				You will receive an email confirmation shortly
			</p>
			<Button
				label="BACK TO HOME"
				stylesClass="checkout-confirm-btn"
				onClick={goHome}
			/>
		</div>
	);
};

export default CheckoutConfirm;
