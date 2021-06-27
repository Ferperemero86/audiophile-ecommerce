import React from "react";
import Link from "next/link";

import Img from "../img/Img";

const Links = ({ links }) => {
	return links.map((link, idx) => {
		if (link.type === "image") {
			return (
				<Link href={link.url} key={idx}>
					<a className="menu-link">
						<Img url={link.label} />
					</a>
				</Link>
			);
		}

		return (
			<Link
				href={{ pathname: link.url, query: { category: link.category } }}
				key={idx}
			>
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
