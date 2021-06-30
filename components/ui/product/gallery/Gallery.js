import React from "react";

// import Img from "../../img/Img";
import Background from "../../../ui/Background";

const GalleryImages = ({ images }) => {
	return Object.keys(images).map((img, idx) => {
		const image = images[img];

		if (typeof image === "object") {
			return (
				<div className="gallery-img" key={idx}>
					<Background images={image} />
				</div>
			);
		}

		return null;
	});
};

const Gallery = ({ images }) => {
	return (
		<div className="gallery">
			<GalleryImages images={images} />
		</div>
	);
};

export default Gallery;
