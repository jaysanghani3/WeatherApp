import SharedContext from "../context/SharedContext";
import { useContext } from "react";
import MainTempture from "./MainTempture";
import HourlyForcast from "./HourlyForcast";
import DaysForcast from "./DaysForcast";
import Wind from "./Wind";
import '../index.css'
const Weather = () => {
    const { city, currentWeather, handleCityChange, handleCheckCity, msg, loader } = useContext(SharedContext);
    const isDisable = city == null || city === "" ? true : false;
    console.log(loader)
    return (
        <div className="flex flex-col h-screen justify-center items-center bg-[#ECF4D6] ">
            <div className="flex items-center justify-center mt-8 justify-around bg-[#265073] backdrop-blur-lg bg-opacity-20 w-8/12 rounded-2xl p-3 mb-3">
                <input type="text" className="border border-gray-400 mr-2 rounded-md p-2 w-9/12" placeholder="Enter City name" value={city} onChange={handleCityChange} />
                <button className={`${isDisable ? 'bg-gray-300 text-gray-500' : 'bg-[#6F8284] border-2 text-white'} font-bold py-2 px-10 rounded`} onClick={handleCheckCity} disabled={isDisable} >Search</button>
            </div>

            <div className="flex bg-[#265073] backdrop-blur-lg bg-opacity-20 h-[90vh] p-8 rounded-2xl w-8/12 justify-center">
                {
                    loader ?
                        <div className="border-2 rounded-xl p-4 bg-[#265073] backdrop-blur-lg bg-opacity-20 w-5/12 mr-6 flex justify-center item-center">
                            <div className="flex items-center justify-center mt-8 flex-col">
                                <span className="loader"></span>
                            </div>
                        </div>
                        :
                        currentWeather && city.toLowerCase() === currentWeather?.location?.name.toLowerCase()
                            ? <MainTempture />
                            : msg && <div className="flex flex-col  p-8 rounded-2xl w-full ml-[300px] justify-center">
                                <h2 className="text-center text-[50px] text-[#265073] mt-8">City not found</h2>
                                <img src="src/assets/city.png" alt="404" className="w-full h-[25vh] mt-11 mx-auto " />
                            </div>
                }

                <div className="flex flex-col w-full">
                    {loader ?
                        <div className="border-2 rounded-xl mb-6 p-4 bg-[#265073] backdrop-blur-lg bg-opacity-20 h-[30vh] w-full mr-6 flex justify-center item-center">
                            <div className="flex items-center justify-center mt-8 flex-col">
                                <span className="loader"></span>
                            </div>
                        </div> :
                        currentWeather && city.toLowerCase() === currentWeather?.location?.name.toLowerCase() ?
                            <HourlyForcast />
                            : null
                    }

                    {loader ? <div className="border-2 rounded-xl mb-6 p-4 bg-[#265073] backdrop-blur-lg bg-opacity-20 h-[30vh] w-full mr-6 flex justify-center item-center">
                        <div className="flex items-center justify-center mt-8 flex-col">
                            <span className="loader"></span>
                        </div>
                    </div> : currentWeather && city.toLowerCase() === currentWeather?.location?.name.toLowerCase() ? <DaysForcast /> : null}

                    {loader ? <div className="border-2 rounded-xl mb-6 p-4 bg-[#265073] backdrop-blur-lg bg-opacity-20 h-[30vh] w-full mr-6 flex justify-center item-center">
                        <div className="flex items-center justify-center mt-8 flex-col">
                            <span className="loader"></span>
                        </div>
                    </div> : currentWeather && city.toLowerCase() === currentWeather?.location?.name.toLowerCase() ? <Wind /> : null}
                </div>
            </div>

        </div>
    )
}

export default Weather;