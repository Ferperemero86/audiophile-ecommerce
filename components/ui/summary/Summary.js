import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { validateForm } from "../../../state/actions/form-actions";
import { removeAllCartProducts } from "../../../state/actions/cart-actions";

import Button from "../button/Button";
import CartProduct from "../cart/cart-product/CartProduct";

const SummaryProducts = ({ items }) => {
	return items.map((item, idx) => {
		return <CartProduct product={item} key={idx} />;
	});
};

const Summary = () => {
	const router = useRouter();
	const { items } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const total = items.reduce((a, b) => a + b.price * b.quantity, 0);
	const vat = parseInt((total * 0.2).toFixed(2));
	const shipping = 50;
	const grandTotal = total + vat + shipping;

	const checkFormValidation = () => {
		dispatch(validateForm());
		dispatch(removeAllCartProducts());
		router.push("/checkout");
	};

	return (
		<div className="summary">
			<h2 className="summary-heading">SUMMARY</h2>
			<div className="summary-products">
				{items.length > 0 && <SummaryProducts items={items} />}
				{items.length === 0 && <p>No items in cart</p>}
			</div>
			<div className="summary-details">
				<div className="summary-details-section">
					<p className="text">TOTAL</p>
					<p className="price">{`£ ${total}`}</p>
				</div>
				<div className="summary-details-section">
					<p className="text">SHIPPING</p>
					<p className="price">{`£${shipping}`}</p>
				</div>
				<div className="summary-details-section">
					<p className="text">VAT</p>
					<p className="price">{`£ ${vat}`}</p>
				</div>
				<div className="summary-details-section grand-total">
					<p className="text">GRAND TOTAL</p>
					<p className="price">{`£ ${grandTotal}`}</p>
				</div>
			</div>
			<Button
				label="Checkout"
				onClick={checkFormValidation}
				stylesClass="summary-btn"
			/>
		</div>
	);
};

export default Summary;
