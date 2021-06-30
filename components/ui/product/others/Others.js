import React from "react";
import { useRouter } from "next/router";

import Button from "../../button/Button";
import Background from "../../Background";

const OthersItems = ({ others }) => {
	const router = useRouter();

	return others.map((item, idx) => {
		const { image, name, category, id } = item;

		const goToProductDetails = () =>
			router.push({ pathname: "/details", query: { category, id } });

		return (
			<div className="others-item" key={idx}>
				<Background images={image} stylesClass="others-item-img" />
				<div className="others-item-body">
					<h3 className="heading">{name}</h3>
					<Button label="SEE PRODUCT" onClick={goToProductDetails} />
				</div>
			</div>
		);
	});
};

const Others = ({ others, stylesClass }) => (
	<div className={`others ${stylesClass}`}>
		<div className="others-heading">YOU MAY ALSO LIKE</div>
		<div className="others-items">
			<OthersItems others={others} />
		</div>
	</div>
);

export default Others;
