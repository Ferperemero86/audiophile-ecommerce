import React from "react";

const Img = ({ url, stylesClass }) => (
	<img src={url} className={`img ${stylesClass}`} />
);

export default Img;
