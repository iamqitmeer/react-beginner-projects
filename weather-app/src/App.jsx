import React from "react";
import icon from "./assets/weather.png";
import humidity from "./assets/humidity.png";
import wind from "./assets/wind.png";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  let [userInput, setUserInput] = useState("London");
  let [weather, setWeather] = useState();

  useEffect(() => {
    getDataFromAPI(userInput)
      .then((data) => setWeather(data))
      .catch((e) => {
        console.log(e);
      });
  }, []);

  async function getDataFromAPI(city) {
    try {
      let res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"055b354669952ef35434839dff99e3f8"}`
      );
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }

  let handleClick = async () => {
    try {
      const data = await getDataFromAPI(userInput);
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="flex items-center justify-center w-full h-screen bg-blue-800">
      <div className="w-full max-w-[500px] bg-white rounded-2xl p-6">
        <div className="relative w-full">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="w-full block outline-none ps-4 p-4 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your location"
            required=""
          />
          <button
            onClick={handleClick}
            className="absolute right-2.5 top-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get Weather
          </button>
        </div>
        {weather ? (
          <>
            <div className="flex items-center justify-center flex-col">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                className="w-60"
              />
              <h1 className="text-8xl font-light tracking-tighter">
                {Math.floor(weather.main.temp - 273.15)}°c
              </h1>
              <h1 className="text-4xl font-black tracking-tighter">
                {weather.name}
              </h1>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center justify-between p-6">
                <img className="w-12 mr-4" src={humidity} alt="" />
                <div>
                  <h1 className="text-2xl font-bold tracking-tighter">
                    {weather.main.humidity}%
                  </h1>
                  <p className="font-semibold tracking-tighter">Humidity</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-6">
                <div>
                  <img className="w-16 mr-4" src={wind} alt="" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold tracking-tighter">
                    {weather.wind.speed} km/h
                  </h1>
                  <p className="font-semibold tracking-tighter">Wind Speed</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <h1>No Data Available</h1>
        )}
      </div>
    </div>
  );
}

export default App;
