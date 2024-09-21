import React, { useState } from "react";
import products from "./product";
import categories from "../category";
import { Select, SelectItem } from "@nextui-org/react";

function App() {
  let [product, setProduct] = useState(products);
  let [category, setCategory] = useState(categories);

  return (
    <div className="flex flex-wrap">
      <div className="w-[25%] p-8">
        <h1 className="text-2xl">React Store</h1>

        <input
          type="search"
          className="border-2 p-2 w-full mt-4"
          placeholder="Search Product"
        />
        <div className="mt-6">
          <h1 className="text-md mb-3 ml-1">Category</h1>
          <Select
            key={category.slug}
            label="Search By Category"
            placeholder="Select an Category"
            className="w-full"
          >
            {category.map((category) => {
              return <SelectItem>{category.name}</SelectItem>;
            })}
          </Select>
        </div>

        <div className="mt-6">
          <h1 className="text-md ml-1">Search By Keywords</h1>
          {[
            "Beauty",
            "Groceries",
            "Vehicle",
            "Womens Shoes",
            "Laptops",
            "Mobile Accessories",
          ].map((sin) => {
            return (
              <button className="w-full p-4 bg-gray-100 mt-2 hover:bg-zinc-200 rounded">
                {sin}
              </button>
            );
          })}
        </div>
        <div className="mt-4">
          <button className="w-full p-4 text-white bg-zinc-950 hover:bg-zinc-900 mt-2 rounded-lg">
            Reset Filters
          </button>
        </div>
      </div>
      <div className="w-[60%] p-6">
        <div className=" flex items-center justify-center gap-8 flex-wrap">
          {product.map((item) => {
            return (
              <div className="w-[200px] h-[220px] m-4 flex flex-col justify-center">
                <img src={item.thumbnail} />
                <p className="text-lg font-bold">{item.title}</p>
                <h1 className="text-sm font-semibold">${item.price}</h1>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[15%]"></div>
    </div>
  );
}

export default App;
