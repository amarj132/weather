import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const apiKey = "73aacc122281389b356b9cbb49de1c4b";
  const [data, setData] = useState({});
  const [cityName, setCityName] = useState("");

  const getWeatherDetails = async (cityName) => {
    if (!cityName) return;
    const da = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityName +
        "&appid=" +
        apiKey
    );
    const data = await da.json();

    setData(data);
  };

  const handleChangeInput = (e) => {
    setCityName(e.target.value);
  };

  const handleSearch = () => {
    getWeatherDetails(cityName);
  };

  useEffect(() => {
    getWeatherDetails("pune");
  }, []);

  return (
    <>
      <div className="flex justify-center items-center ">
        <h1 className="absolute font-bold text-3xl  text-cyan-300">
          WEATHER APP{" "}
        </h1>
        <input
          className="absolute mt-16 pl-2 rounded-md w-52 border border-none"
          type="text"
          value={cityName}
          onChange={handleChangeInput}
        />
        <button
          className="absolute p-2 mt-36 rounded-md bg-green-300"
          onClick={handleSearch}
        >
          Search{" "}
        </button>
        <img
          className="w-full h-[400px]"
          alt="weather img"
          src="https://www-cdn.eumetsat.int/files/styles/16_9_large/s3/2020-06/ASpot_Weather.jpg?h=d1cb525d&itok=lvYWh_W8"
        />
      </div>
      <div className="flex-col justify-center  m-auto p-5 w-[400px] h-[300px]  shadow-xl">
        <img
          className=" w-20 h-20    rounded-lg mt-8  ml-36"
          alt="icon"
          src="https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png"
        />
        <h5 className="text-3xl font-bold mt-8 ml-36">{data?.name}</h5>
        <h5 className="text-xl font-bold  ml-36">
          {(data?.main?.temp - 273.15).toFixed(2)}° c
        </h5>
      </div>
    </>
  );
}

export default App;
