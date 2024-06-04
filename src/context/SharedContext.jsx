import { createContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const SharedContext = createContext();
const APIKey = "edb302877193420c98a64403241901";
const weatherAPI = "http://api.weatherapi.com/v1/forecast.json?key=" + APIKey + "&q=";

// eslint-disable-next-line react/prop-types
export function SharedContextProvider({ children }) {
    
    const [msg, setMsg] = useState(null);
    const [city, setCity] = useState("ahmedabad");
    const [currentWeather, setCurrentWeather] = useState(null);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        getWeatherData();
    }, []);

    const handleCityChange = (e) => {
        setMsg(null);
        setCity(e.target.value);
    }

    const handleCheckCity = () => {
        getWeatherData();
        if (city.toLowerCase() !== currentWeather?.location?.name.toLowerCase()) {
            setMsg("City not found");
        }
    }

    const getWeatherData = async () => {
       try{
        setLoader(true);
        const URL = weatherAPI + city + "&days=5&aqi=no&alerts=no";
        const response = await axios.get(URL);
        setCurrentWeather(response.data);
        console.log(currentWeather)
        
    }catch{
        console.log("city not found ")
    }
    setLoader(false);
};

    const value = {
        city,
        currentWeather,
        loader,
        handleCityChange,
        handleCheckCity,
        msg
    };
    
      return <SharedContext.Provider value={value}>{children}</SharedContext.Provider>;
    }
    
    export default SharedContext;