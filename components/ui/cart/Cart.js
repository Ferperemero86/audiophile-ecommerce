import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
	increaseItemAmount,
	decreaseItemAmount,
	removeAllCartProducts
} from "../../../state/actions/cart-actions";

import CartProduct from "../cart/cart-product/CartProduct";
import Button from "../button/Button";

const CartProducts = () => {
	const products = useSelector((state) => state.cart.items);
	const dispatch = useDispatch();

	return products.map((product, idx) => {
		const { id, image, heading, price } = product;
		const smImage = image[0];

		const increaseAmount = (e) => {
			e.preventDefault();

			dispatch(increaseItemAmount(id, smImage, heading, price));
		};

		const decreaseAmount = (e) => {
			e.preventDefault();

			dispatch(decreaseItemAmount(id, smImage, heading, price));
		};

		return (
			<div className="product" key={idx}>
				<CartProduct product={product} />
				<div className="product-btn">
					<Button
						stylesClass="product-btn-el"
						label="-"
						onClick={decreaseAmount}
					/>
					<span className="product-btn-el number">{product.quantity}</span>
					<Button
						stylesClass="product-btn-el"
						label="+"
						onClick={increaseAmount}
					/>
				</div>
			</div>
		);
	});
};

const Cart = () => {
	const state = useSelector((state) => state.cart);
	const products = state.items;
	const total = products.reduce((a, b) => a + b.price * b.quantity, 0);
	const dispatch = useDispatch();

	const removeProducts = (e) => {
		e.preventDefault();

		dispatch(removeAllCartProducts());
	};

	return (
		<div className="cart container">
			<div className="cart-header">
				<div className="cart-header-heading">
					<h3 className="heading">CART</h3>
					<Button label="Remove All" onClick={removeProducts} />
				</div>
				<div className="cart-body">
					<div className="cart-body-products">
						<CartProducts />
					</div>
					<div className="cart-body-total">
						<p className="text">TOTAL</p>
						<span className="number">{`£ ${total}`}</span>
					</div>
				</div>
				<Button label="CHECKOUT" stylesClass="cart-btn" />
			</div>
		</div>
	);
};

export default Cart;
