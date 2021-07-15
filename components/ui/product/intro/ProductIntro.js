import React from "react";

const ProductIntro = ({ product }) => {
	const { heading, text } = product;

	return (
		<div className="product-intro">
			<h1 className="product-intro-heading">{heading}</h1>
			<p className="product-intro-text">{text}</p>
		</div>
	);
};

export default ProductIntro;
