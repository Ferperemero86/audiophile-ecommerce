import React from "react";

const Button = ({ label, stylesClass }) => {
	return <button className={`button ${stylesClass}`}>{label}</button>;
};

export default Button;
