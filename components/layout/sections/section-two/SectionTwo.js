import React from "react";

import Model from "../../../ui/product/model/Model";

import { appData } from "../../../../appData";

const { models } = appData;

const SectionTwo = ({ stylesClass }) => {
	return (
		<div className={`section-two ${stylesClass}`}>
			<Model model={models.first} stylesClass="model-first" />
			<Model model={models.second} stylesClass="model-second" />
			<Model model={models.third} stylesClass="model-third" />
		</div>
	);
};

export default SectionTwo;
