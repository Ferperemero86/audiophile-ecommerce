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
	const smImage = image[0];

	const addItem = (e) => {
		e.preventDefault();

		dispatch(addItemToCart(id, smImage, heading, price));
	};

	const increaseAmount = (e) => {
		e.preventDefault();

		dispatch(increaseItemAmount(id, smImage, heading, price));
	};

	const decreaseAmount = (e) => {
		e.preventDefault();

		dispatch(decreaseItemAmount(id, smImage, heading, price));
	};

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
