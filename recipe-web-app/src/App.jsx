import React, { useState } from 'react';
import RecipeCards from './Componet/RecipeCards';

const App = () => {

  const recipes = [
    {
      title: "Spaghetti Carbonara",
      ingredients: "pasta, eggs, cheese, bacon"
    },
    {
      title: "Chicken Stir Fry",
      ingredients: "chicken, vegetables, soy sauce"
    },
    {
      title: "Vegetable Soup",
      ingredients: "vegetables, broth, herbs"
    }
  ];


  return (
    <div className="container mx-auto p-12 w-full h-screen flex mt-16 flex-col">
      {/* Header */}
      <div className='flex items-center justify-between mb-12'>
        <h1 className="text-4xl font-bold mb-6 tracking-tighter	">Recipe Finder</h1>
        <button className="px-8 py-4 text-white rounded-lg bg-black hover:opacity-80 text-xl 	">Favorites</button>
      </div>

      {/* Search Bar */}
      <div className="flex justify-between items-center mb-6 w-full">
        <input
          type="text"
          placeholder="Enter ingredients..."
          className="px-4 py-4 rounded-lg w-full border border-black"
        />
        <button className="	 ml-4 w-40 py-4 text-xl px-4 bg-black hover:opacity-80 text-white rounded-lg"><i class="ri-search-line"></i> Search</button>
      </div>

      <div className="flex space-x-4 mb-4">
        <button className="py-2 bg-gray-100 rounded-lg text-2xl ">All Recipes</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <RecipeCards />
        <RecipeCards />
        <RecipeCards />
        <RecipeCards />
        <RecipeCards />
        <RecipeCards />
        <RecipeCards />
        <RecipeCards />
        <RecipeCards />
        <RecipeCards />
        <RecipeCards />
        <RecipeCards />
        <RecipeCards />
      </div>
    </div>
  );
};

export default App;
