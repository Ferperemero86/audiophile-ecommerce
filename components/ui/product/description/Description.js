import React from "react";

import Background from "../../../ui/Background";
import Button from "../../../ui/button/Button";

const Description = ({ image, heading, text, price }) => {
	return (
		<div className="description">
			<Background images={image} stylesClass="description-img" />
			<div className="description-body">
				<h2 className="description-body-heading">{heading}</h2>
				<p className="description-body-text">{text}</p>
				<p className="description-body-price">{`£ ${price}`}</p>
				<div className="description-body-btns">
					<div className="product-amount-btn">
						<span className="minus btn-el">-</span>
						<span className="number btn-el">1</span>
						<span className="plus btn-el">+</span>
					</div>
					<Button stylesClass="add-cart-btn" label="ADD TO CART" />
				</div>
			</div>
		</div>
	);
};

export default Description;
