import SharedContext from "../context/SharedContext";
import { useContext } from "react";

const HourlyForcast = () => {
    const { currentWeather} = useContext(SharedContext);
  return (
    <div className="flex flex-col bg-[#265073] backdrop-blur-lg bg-opacity-20 p-4 py-6 rounded-2xl mb-6">
    <h2 className="flex"><img src="src/assets/HoulyForcast.png" alt="wind icon" className="h-6 w-11 me-2" />Houly Forcast </h2><hr className="bg-black w-full mt-2" />
    <div className="flex justify-between">

        <div className="flex items-center mt-8 p-3 mx-2 px-5 flex-col bg-[#265073] rounded-xl bg-opacity-20">
            <p className="text-white text-sm">{currentWeather?.location?.localtime.split(' ')[1].split(':')[0]}</p>
            <p className="text-white text-2xl my-3">{currentWeather?.forecast?.forecastday[0]?.hour[currentWeather?.location?.localtime.split(' ')[1].split(':')[0]].temp_c} <sup className="text-sm">&#8451;</sup></p>
        </div>
        <div className="flex items-center mt-8 p-3 mx-2 px-5 flex-col bg-[#265073] rounded-xl bg-opacity-20">
            <p className="text-white text-sm">{parseInt(currentWeather?.location?.localtime.split(' ')[1].split(':')[0])+1}</p>
            <p className="text-white text-2xl my-3">{currentWeather?.forecast?.forecastday[0]?.hour[currentWeather?.location?.localtime.split(' ')[1].split(':')[0]].temp_c} <sup className="text-sm">&#8451;</sup></p>
        </div>
        <div className="flex items-center mt-8 p-3 mx-2 px-5 flex-col bg-[#265073] rounded-xl bg-opacity-20">
            <p className="text-white text-sm">{parseInt(currentWeather?.location?.localtime.split(' ')[1].split(':')[0])+2}</p>
            <p className="text-white text-2xl my-3">{currentWeather?.forecast?.forecastday[0]?.hour[currentWeather?.location?.localtime.split(' ')[1].split(':')[0]].temp_c} <sup className="text-sm">&#8451;</sup></p>
        </div>
        <div className="flex items-center mt-8 p-3 mx-2 px-5 flex-col bg-[#265073] rounded-xl bg-opacity-20">
            <p className="text-white text-sm">{parseInt(currentWeather?.location?.localtime.split(' ')[1].split(':')[0])+3}</p>
            <p className="text-white text-2xl my-3">{currentWeather?.forecast?.forecastday[0]?.hour[currentWeather?.location?.localtime.split(' ')[1].split(':')[0]].temp_c} <sup className="text-sm">&#8451;</sup></p>
        </div>
        <div className="flex items-center mt-8 p-3 mx-2 px-5 flex-col bg-[#265073] rounded-xl bg-opacity-20">
            <p className="text-white text-sm">{parseInt(currentWeather?.location?.localtime.split(' ')[1].split(':')[0])+4}</p>
            <p className="text-white text-2xl my-3">{currentWeather?.forecast?.forecastday[0]?.hour[currentWeather?.location?.localtime.split(' ')[1].split(':')[0]].temp_c} <sup className="text-sm">&#8451;</sup></p>
        </div>

    </div>
</div>
  )
}

export default HourlyForcast