import React from "react";

import Img from "../ui/img/Img";

const Background = ({ images, stylesClass }) => {
	if (Array.isArray(images)) {
		return images.map((img, idx) => (
			<Img
				url={img.url}
				stylesClass={`${img.size}-img ${stylesClass}`}
				key={idx}
			/>
		));
	}

	return Object.keys(images).map((img, idx) => {
		const url = images[img];
		const size =
			img === "mobile" ? "sm-img" : img === "tablet" ? "md-img" : "lg-img";

		return <Img url={url} stylesClass={`${size} ${stylesClass}`} key={idx} />;
	});
};

export default Background;
