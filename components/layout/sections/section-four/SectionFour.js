import React from "react";

import Model from "../../../ui/product/model/Model";

const ModelsItems = ({ models }) => {
	return models.map((model, idx) => {
		return <Model model={model} stylesClass="model-fourth" key={idx} />;
	});
};

const SectionFour = ({ modelsItems }) => {
	return (
		<div className="section-four container">
			<ModelsItems models={modelsItems} />
		</div>
	);
};

export default SectionFour;
