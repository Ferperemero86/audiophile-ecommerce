import React from "react";

import Button from "../../button/Button";
import Background from "../../Background";

const OthersItems = ({ others }) => {
	const { image, name } = others;
	const itemHeading = name.toUppercase();

	return others.map((item, idx) => {
		return (
			<div className="others-item" key={idx}>
				<Background images={image} />
				<div className="others-item-body">
					<h3 className="heading">{itemHeading}</h3>
					<Button label="SEE PRODUCT" />
				</div>
			</div>
		);
	});
};

const Others = ({ others }) => {
	<div className="others">
		<div className="others-heading">YOU MAY ALSO LIKE</div>
		<div className="others-items">
			<OthersItems others={others} />
		</div>
	</div>;
};

export default Others;
