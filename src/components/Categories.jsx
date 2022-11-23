import React from "react";
import { useState } from "react";

export const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onClickCategory = (index) => {
    setActiveIndex(index);
  };
  const categories = ["Все продукты", "Ягоды", "Суперфуд"];
  return (
    <ul className="shop__nav">
      {categories.map((value, i) => (
        <li
          onClick={() => onClickCategory(i)}
          className={activeIndex === i ? "shop__list _active" : "shop__list"}
          key={i}
        >
          {value}
        </li>
      ))}
    </ul>
  );
};
export default Categories;
