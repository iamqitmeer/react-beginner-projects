import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  let [recipe, setRecipe] = useState([]);

  let params = useParams();
  console.log(params.id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetchSingleRecipe(); // Await the fetchSingleRecipe
        setRecipe(data.meals); // Log the resolved data
      } catch (error) {
        console.error("Error fetching recipe:", error); // Handle any potential errors
      }
    };

    fetchData(); // Call the async function inside useEffect
  }, []);

  let fetchSingleRecipe = async () => {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52805`
    );
    let data = await response.json(); // Await the JSON parsing
    return data;
  };

  console.log(recipe);

  return (
    <div>
      {recipe ? (
        recipe.map((product) => {
          <div>
            <div>
              <img src={product.strMealThumb} alt="" />
            </div>

            <div>
              <h1>{product.strMeal}</h1>
            </div>
          </div>;
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default RecipeDetails;
