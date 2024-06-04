import SharedContext from "../context/SharedContext";
import { useContext } from "react";
const Wind = () => {
    const { currentWeather } = useContext(SharedContext);
    return (
        <div className="flex justify-between bg-[#265073] backdrop-blur-lg bg-opacity-20 p-4 py-7 rounded-2xl">
            <div className="flex bg-white backdrop-blur-lg bg-opacity-20 py-5 px-3 flex-col rounded-xl mr-5 w-1/2">
                <p className="flex text-white text-xl tracking-wide mb-3 text-black font-bold">
                    <img src="src/assets/wind.png" alt="wind icon" className="h-6 w-6 me-2" />Wind
                </p>
                <p className="text-white text-3xl ">{currentWeather?.current?.wind_kph} <span className="text-sm">KM/H</span></p>
            </div>
            <div className="flex bg-white backdrop-blur-lg bg-opacity-20 py-5 px-3 flex-col rounded-xl w-1/2">
                <p className="flex text-white text-xl tracking-wide mb-3 text-black font-bold">
                    <img src="src/assets/gust.png" alt="wind icon" className="h-6 w-6 me-2" />Wind Gust
                </p>
                <p className="text-white text-3xl ">{currentWeather?.current?.gust_kph}&#34;</p>
            </div>
        </div>
    )
}

export default Wind