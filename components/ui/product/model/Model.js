import React from "react";
import { useRouter } from "next/router";

import Img from "../../img/Img";
import Button from "../../button/Button";

const Images = ({ images }) => {
	return images.map((img, idx) => {
		const imgClass =
			img.size === "sm" ? "sm-img" : img.size === "md" ? "md-img" : "lg-img";

		return (
			<Img
				url={img.url}
				stylesClass={`model-header-img ${imgClass}`}
				key={idx}
			/>
		);
	});
};

const Model = ({ model, stylesClass }) => {
	const router = useRouter();
	const { id, image, name, text, description, category } = model;
	const modelText = !text ? description : text;

	const goToDetails = (e) => {
		e.preventDefault();

		router.push({
			pathname: "/details",
			query: { id, category }
		});
	};

	return (
		<div className={`model ${stylesClass}`}>
			<div className="model-header">
				{!Array.isArray(image) && (
					<Img url={image} stylesClass="model-header-img" />
				)}
				{Array.isArray(image) && <Images images={image} />}
			</div>
			<div className="model-body">
				<div className="model-body-content">
					<h2 className="model-body-content-heading">{name}</h2>
					<p className="model-body-content-text">{modelText}</p>
					<Button
						label="SEE PRODUCT"
						stylesClass="model-body-content-btn"
						onClick={goToDetails}
					/>
				</div>
			</div>
		</div>
	);
};

export default Model;
