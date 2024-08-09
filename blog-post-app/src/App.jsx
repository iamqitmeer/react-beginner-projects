import { useState } from 'react'
import './App.css'
import Blog from './Blog'
import { useEffect } from 'react'

function App() {

  let [blog, setblog] = useState("")
  let [list, setList] = useState()

  let fetchBlog = async (query) => {
    let getData = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2024-07-09&sortBy=publishedAt&apiKey=1353c28c31b444e3b86193ab50d58d8d`)
    let data = await getData.json()
    return data.meals || []
  }

  function handleClick() {
    fetchblog(blog).then((data) => setList(data))
  }

  return (
    <div className='w-full h-screen p-12  flex items-center justify-center flex-col'>
      <div className='w-[100%] h-full'>
        <div className='p-4'>
          <h1 className='text-5xl text-center text-white font-bold'>blog App</h1>
        </div>

        <div className="flex items-center mb-4 m-0 m-auto w-[70%] mt-12">
          <input
            className="border-blue-600 outline-none flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 mr-2"
            placeholder="search a blog"
            value={blog}
            onChange={(e) => setblog(e.target.value)}
            type="text"
            defaultValue=""
          />
          <button
            onClick={handleClick}
            className="inline-flex items-center text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-blue-600-foreground hover:bg-blue-700 h-10 px-4 py-2 mr-2"
          >
            Search blog
          </button>
        </div>


        {list ? (
          <div className='flex flex-wrap items-center justify-center gap-4'>
            {list.map((data, index) => {
              console.log(data);
              return (
                <Blog
                  key={index}
                  thum={data.strMealThumb}
                  title={data.strMeal}
                  category={data.strCategory}
                  steps={data.strInstructions}
                />
              );
            })}
          </div>
        ) : (
          <h1 className='text-white text-2xl m-0 m-auto w-[70%]'>
            Nothing in the blog list
          </h1>
        )}

        {/* {list.map((data) => {
              return data.meals ? (<h1>Not Found</h1>) : (<blog thum={data.strMealThumb} title={data.title} category={data.strCategory} steps={data.strInstructions} />)
            })}
          </div>
          : <h1 className='text-white text-2xl '>
            Nothing in a blog list</h1>} */}


      </div>
    </div>



  )
}

export default App
