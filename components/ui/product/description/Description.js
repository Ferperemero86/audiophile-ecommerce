import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Background from "../../../ui/Background";
import Button from "../../../ui/button/Button";

import {
	addItemToCart,
	increaseItemAmount,
	decreaseItemAmount
} from "../../../../state/actions/cart-actions";

const Description = ({ id, image, heading, text, price }) => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.cart);
	const itemInCart = state.items.find((item) => item.id === id);
	const quantity = !itemInCart ? 0 : itemInCart.quantity;
	console.log("AMOUNT", itemInCart);
	console.log("DESCSTATE", state);

	const addItem = () => dispatch(addItemToCart(id, heading, price));
	const increaseAmount = () => dispatch(increaseItemAmount(id, heading, price));
	const decreaseAmount = () => dispatch(decreaseItemAmount(id, heading, price));

	return (
		<div className="description">
			<Background images={image} stylesClass="description-img" />
			<div className="description-body">
				<h2 className="description-body-heading">{heading}</h2>
				<p className="description-body-text">{text}</p>
				<p className="description-body-price">{`£ ${price}`}</p>
				<div className="description-body-btns">
					<div className="product-amount-btn">
						<Button
							stylesClass="minus btn-el"
							onClick={decreaseAmount}
							label="-"
						/>
						<span className="number btn-el">{quantity}</span>
						<Button
							stylesClass="minus btn-el"
							onClick={increaseAmount}
							label="+"
						/>
					</div>
					<Button
						stylesClass="add-cart-btn"
						label="ADD TO CART"
						onClick={addItem}
					/>
				</div>
			</div>
		</div>
	);
};

export default Description;
