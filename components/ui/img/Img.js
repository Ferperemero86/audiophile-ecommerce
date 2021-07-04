import React from "react";

const Img = ({ url, stylesClass, onClick }) => (
	<img src={url} className={`img ${stylesClass}`} onClick={onClick} />
);

export default Img;
