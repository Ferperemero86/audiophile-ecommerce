import React from "react";

import Description from "../../../ui/product/description/Description";
import Features from "../../../ui/product/features/Features";
import Includes from "../../../ui/product/includes/Includes";
import Gallery from "../../../ui/product/gallery/Gallery";
import Others from "../../../ui/product/others/Others";

const SectionFive = ({ product, stylesClass }) => {
	const {
		id,
		image,
		name,
		description,
		price,
		features,
		includes,
		gallery,
		others
	} = product;

	return (
		<div className={`section-five ${stylesClass}`}>
			<Description
				id={id}
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
			<Others others={others} stylesClass="vertical-margin" />
		</div>
	);
};

export default SectionFive;
