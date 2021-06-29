import React from "react";

const Button = ({ label, stylesClass, onClick }) => {
	return (
		<button className={`button ${stylesClass}`} onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;
