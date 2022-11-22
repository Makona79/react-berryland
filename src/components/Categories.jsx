import React from "react";

export const Categories = () => {
	return (
		<ul className="shop__nav">
			<li className="shop__list _active" data-filter="all">
				Все продукты
			</li>
			<li className="shop__list" data-filter="berry">
				Ягоды
			</li>
			<li className="shop__list" data-filter="superfood">
				Суперфуд
			</li>
		</ul>
	);
};
export default Categories;
