import React from "react";

import ProductIntro from "../../ui/product/intro/ProductIntro";
import Img from "../../ui/img/Img";

const Background = ({ images }) => {
	return Object.keys(images).map((img, idx) => {
		const url = images[img];
		const size =
			img === "mobile" ? "sm-img" : img === "tablet" ? "md-img" : "lg-img";

		return (
			<Img url={url} stylesClass={`${size} header-background`} key={idx} />
		);
	});
};

const HeaderPrimary = ({ product, button }) => {
	return <ProductIntro product={product} button={button} />;
};

const Header = ({ product, button, type }) => {
	return (
		<div className={`header ${type}`}>
			<Background images={product.images} />
			<div className="header-content container">
				{type === "header-primary" && (
					<HeaderPrimary product={product} button={button} />
				)}
			</div>
		</div>
	);
};

export default Header;
