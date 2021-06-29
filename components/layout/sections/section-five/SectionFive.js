import React from "react";

import Description from "../../../ui/product/description/Description";

const SectionFive = ({ product, stylesClass }) => {
	console.log("PRODUCT", product);
	const { image, name, description, price } = product;

	return (
		<div className={`section-five ${stylesClass}`}>
			<Description
				image={image}
				heading={name}
				text={description}
				price={price}
			/>
		</div>
	);
};

export default SectionFive;
