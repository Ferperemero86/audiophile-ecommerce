import React from "react";

const IncludesItems = ({ includes }) => {
	return includes.map((includeItem, idx) => {
		const { quantity, item } = includeItem;

		return (
			<div className="includes-body-item" key={idx}>
				<p className="amount">{`${quantity}x`}</p>
				<p className="item">{item}</p>
			</div>
		);
	});
};

const Includes = ({ includes }) => {
	return (
		<div className="includes">
			<h3 className="includes-heading">IN THE BOX</h3>
			<div className="includes-body">
				<IncludesItems includes={includes} />
			</div>
		</div>
	);
};

export default Includes;
