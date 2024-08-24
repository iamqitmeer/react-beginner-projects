import React, { useEffect, useState } from "react";
import humidity from "./assets/humidity.png";
import wind from "./assets/wind.png";

function App() {

  let [weatherCity, setWeatherCity] = useState("New York")
  let [userInput, setUserInput] = useState()
  let [weather, setWeather] = useState(null)

  useEffect(() => {
    fetchData(weatherCity).then(data => setWeather(data))
  }, [weatherCity])

  function handleClick() {
    setWeatherCity(userInput)
    setUserInput("")
  }

  async function fetchData(city) {
    let apiKey = "055b354669952ef35434839dff99e3f8"
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    let jsonData = await fetch(api)
    return await jsonData.json()
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-blue-200 ">
      {weather ? <div className="w-full shadow-lg shadow-blue-900 max-w-[500px] bg-blue-800 rounded-2xl p-6">
        <form onSubmit={handleSubmit} className="relative w-full">
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            type="text"
            className="w-full block outline-none ps-4 p-4 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your location"
          />
          <button type="submit"
            onClick={handleClick}
            className="absolute right-2.5 top-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get Weather
          </button>
        </form>
        <div className="flex items-center justify-center flex-col">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} className="w-60"
            alt="Weather Icon"
          />
          <h1 className="text-8xl text-white font-light tracking-tighter">
            {weather.main.temp ? (weather.main.temp - 273.15).toFixed(1) + "°C" : "N/A"}
          </h1>
          <h1 className="text-4xl text-white font-black tracking-tighter">
            {weather.name}
          </h1>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center justify-between p-6">
            <img className="w-12 mr-4" src={humidity} alt="Humidity Icon" />
            <div>
              <h1 className="text-2xl text-white font-bold tracking-tighter">
                {weather.main.humidity ?? "N/A"}%
              </h1>
              <p className="font-semibold text-white tracking-tighter">Humidity</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-6">
            <div>
              <img className="w-16 mr-4" src={wind} alt="Wind Speed Icon" />
            </div>
            <div>
              <h1 className="text-2xl text-white font-bold tracking-tighter">
                {weather.wind.speed ? (weather.wind.speed * 3.6).toFixed(1) : "N/A"} km/h
              </h1>
              <p className="font-semibold text-white tracking-tighter">Wind Speed</p>
            </div>
          </div>
        </div>
      </div> : <div role="status">
        <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>}
    </div>
  );

}

export default App;
