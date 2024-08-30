import React from 'react'

function RecipeCards() {
    return (
        <div className="shadow-sm shadow-black rounded-lg shadow p-6">
            <div className='flex items-center justify-between'>
                <h2 className="text-3xl font-bold mb-2 tracking-tighter	">Spaghetti Carbonara</h2>
                <h2 className="text-3xl font-bold mb-2 tracking-tighter	cursor-pointer"><i class="ri-heart-line"></i></h2>
            </div>
            <p className="mb-4 text-gray-800 text-lg ">Ingredients: pasta, eggs, cheese, bacon

            </p>

            <img
                src="https://plus.unsplash.com/premium_photo-1675864532183-8f37e8834db5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="h-[180px] w-full object-cover object-center rounded-lg mb-4"
            />


            <button className="px-4 py-2 text-gray-200 rounded-lg bg-black hover:opacity-80 text-lg w-full" >+ View Recipe</button>
        </div>

    )
}

export default RecipeCards