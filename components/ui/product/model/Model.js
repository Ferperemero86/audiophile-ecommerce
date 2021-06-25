import React from "react";

import Img from "../../img/Img";
import Button from "../../button/Button";

const Model = ({ model, stylesClass }) => {
	const { image, name, text, button } = model;
	return (
		<div className={`model ${stylesClass}`}>
			<div className="model-header">
				<Img url={image} stylesClass="model-header-img" />
			</div>
			<div className="model-body">
				<h2 className="model-body-heading">{name}</h2>
				<p className="model-body-text">{text}</p>
				<Button label={button.label} stylesClass="model-body-btn" />
			</div>
		</div>
	);
};

export default Model;
