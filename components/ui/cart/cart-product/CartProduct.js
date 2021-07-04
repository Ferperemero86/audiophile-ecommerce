import React from "react";

import Img from "../../img/Img";

const CartProduct = ({ product }) => {
	const { image, heading, price } = product;

	return (
		<div className="cart-product">
			<Img stylesClass="cart-product-img" url={image.url} />
			<div className="cart-product-details">
				<h3 className="heading">{heading}</h3>
				<p className="price">{`£ ${price}`}</p>
			</div>
		</div>
	);
};

export default CartProduct;
