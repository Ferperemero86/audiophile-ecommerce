import React from "react";

import Description from "../../../ui/product/description/Description";
import Features from "../../../ui/product/features/Features";
import Includes from "../../../ui/product/includes/Includes";
import Gallery from "../../../ui/product/Gallery/Gallery";

const SectionFive = ({ product, stylesClass }) => {
	const { image, name, description, price, features, includes, gallery } =
		product;

	return (
		<div className={`section-five ${stylesClass}`}>
			<Description
				image={image}
				heading={name}
				text={description}
				price={price}
			/>
			<div className="specs">
				<Features text={features} />
				<Includes includes={includes} />
			</div>
			<Gallery images={gallery} />
		</div>
	);
};

export default SectionFive;
