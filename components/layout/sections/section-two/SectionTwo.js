import React from "react";

import Model from "../../../ui/product/model/Model";

import { appData } from "../../../../appData";

const { models } = appData;

const SectionTwo = ({ stylesClass }) => {
	return (
		<div className={`section-two ${stylesClass}`}>
			<Model model={models.first} stylesClass="model-first" />
		</div>
	);
};

export default SectionTwo;
