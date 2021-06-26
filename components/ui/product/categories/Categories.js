import React from "react";
import Link from "next/link";

import Img from "../../img/Img";

import { appData } from "../../../../appData";

const { categories } = appData;

const Category = ({ category }) => {
	return (
		<div className="category">
			<div className="category-header">
				<Img url={category.image} stylesClass="category-img" />
			</div>
			<div className="category-body">
				<h3 className="category-body-heading">{category.name}</h3>
				<Link
					href={{
						pathname: `${category.link.url}`,
						query: { category: category.category }
					}}
				>
					<a className="category-body-link">{category.link.label}</a>
				</Link>
				<Img url={category.link.image} stylesClass="category-body-arrow" />
			</div>
		</div>
	);
};

const CategoriesList = () => {
	return categories.map((category, idx) => {
		return <Category category={category} key={idx} />;
	});
};

const Categories = () => {
	return (
		<div className="categories">
			<CategoriesList />
		</div>
	);
};

export default Categories;
