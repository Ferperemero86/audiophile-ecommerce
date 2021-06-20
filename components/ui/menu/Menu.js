import React from "react";
import Link from "next/link";

const Links = ({ links }) => {
	return links.map((link, idx) => {
		return (
			<Link href={link.url} key={idx}>
				<a className="menu-link">{link.label}</a>
			</Link>
		);
	});
};

const Menu = ({ stylesClass, links }) => (
	<div className={`menu ${stylesClass}`}>
		<Links links={links} />
	</div>
);

export default Menu;
