import React from "react";
import { useSelector } from "react-redux";

import CartProduct from "../cart/cart-product/CartProduct";

const SummaryProducts = ({ items }) => {
	return items.map((item, idx) => {
		return <CartProduct product={item} key={idx} />;
	});
};

const Summary = () => {
	const { items } = useSelector((state) => state.cart);
	const total = items.reduce((a, b) => a + b.price * b.quantity, 0);
	const vat = parseInt((total * 0.2).toFixed(2));
	const shipping = 50;
	const grandTotal = total + vat + shipping;

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
		</div>
	);
};

export default Summary;
