import React from "react";

const Features = ({ text }) => {
	return (
		<div className="features">
			<h3 className="features-heading">FEATURES</h3>
			<p className="features-text">{text}</p>
		</div>
	);
};

export default Features;
