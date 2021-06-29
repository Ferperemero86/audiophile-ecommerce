import React from "react";

import Img from "../../img/Img";

const GalleryImages = ({ images }) => {
	return images.map((img, idx) => {
		return (
			<div className="gallery-images" key={idx}>
				<Img url={img.url} stylesClass="gallery-images-img" />
			</div>
		);
	});
};

const Gallery = () => {
	return (
		<div className="gallery">
			<GalleryImages />
		</div>
	);
};

export default Gallery;
