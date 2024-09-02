import React from "react";
import { NavLink } from "react-router-dom";

function RecipeCards({
  title,
  idMeal,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
  image,
}) {
  return (
    <NavLink
      to={`/favourite/${idMeal}`}
      className="shadow-sm shadow-black rounded-lg shadow p-6"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold mb-2 tracking-tighter	">{title}</h2>
        <h2 className="text-3xl font-bold mb-2 tracking-tighter	cursor-pointer">
          <i class="ri-heart-line"></i>
        </h2>
      </div>
      <p className="mb-4 text-gray-800 text-lg ">
        {`Ingredients: ${strIngredient1}, ${strIngredient2}, ${strIngredient3}`}
      </p>

      <img
        src={image}
        className="h-[180px] w-full object-cover object-center rounded-lg mb-4"
      />

      <button className="px-4 py-2 text-gray-200 rounded-lg bg-black hover:opacity-80 text-lg w-full">
        + View Recipe
      </button>
    </NavLink>
  );
}

export default RecipeCards;
