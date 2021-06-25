import React from "react";

import Categories from "../../../ui/product/categories/Categories";

const SectionOne = ({ stylesClass }) => {
	return (
		<div className={`section-one ${stylesClass}`}>
			<Categories />
		</div>
	);
};

export default SectionOne;
