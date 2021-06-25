import React from "react";

import Img from "../../../ui/img/Img";

const SectionThree = ({ content, stylesClass }) => {
	const { image, heading, text } = content;

	return (
		<div className={`section-three ${stylesClass}`}>
			<div className="section-three-casual">
				<div className="section-three-casual-header">
					<Img url={image} stylesClass="casual-header-img" />
				</div>
				<div className="section-three-casual-body">
					<h2 className="casual-body-heading">{heading}</h2>
					<p className="casual-body-text">{text}</p>
				</div>
			</div>
		</div>
	);
};

export default SectionThree;
