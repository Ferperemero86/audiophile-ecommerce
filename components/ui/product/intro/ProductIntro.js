import React from "react";

import Button from "../../button/Button";

const ProductIntro = ({ product, button }) => {
	const { heading, text } = product;

	return (
		<div className="product-intro">
			<h1 className="product-intro-heading">{heading}</h1>
			<p className="product-intro-text">{text}</p>
			<Button stylesClass="product-intro-button" label={button.label} />
		</div>
	);
};

export default ProductIntro;
