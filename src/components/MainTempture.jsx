import SharedContext from "../context/SharedContext";
import { useContext } from "react";

const MainTempture = () => {
    const { currentWeather} = useContext(SharedContext);
    
    return (
        <div className="border-2 rounded-xl p-4 bg-[#265073] backdrop-blur-lg bg-opacity-20 w-5/12 mr-6">
            <div className="flex items-center justify-center mt-8 flex-col">
                <div className="flex items-center justify-center text-white">
                    <p className="text-9xl mb-3">{currentWeather?.current?.temp_c}</p><sup className="text-lg">&#8451;</sup>
                </div>
                <p className="text-2xl text-white tracking-wider">{currentWeather?.current?.condition.text}</p>
                <h1 className="text-3xl tracking-wide font-bold text-white">{currentWeather?.location?.name}</h1>

                <div className="flex items-center justify-center mt-8">
                    <div className="flex bg-white backdrop-blur-lg bg-opacity-20 py-5 px-3 w-[170px] flex-col rounded-xl mr-5">
                        <p className="flex text-white text-xl tracking-wide mb-3 text-black font-bold">
                            <img src="src/assets/feel.png" alt="wind icon" className="h-6 w-6 me-2" />Feel Like
                        </p>
                        <p className="text-white text-3xl text-center">{currentWeather?.current?.feelslike_c} <sup className="text-sm">&#8451;</sup></p>
                    </div>
                    <div className="flex bg-white backdrop-blur-lg bg-opacity-20 py-5 px-3 w-[170px] flex-col rounded-xl ">
                        <p className="flex text-white text-xl tracking-wide mb-3 text-black font-bold">
                            <img src="src/assets/feel.png" alt="wind icon" className="h-6 w-6 me-2" />Prepciton
                        </p>
                        <p className="text-white text-3xl text-center">{currentWeather?.current?.precip_in}&#34;</p>
                    </div>
                </div>
                <div className="flex items-center justify-center my-5">
                    <div className="flex bg-white backdrop-blur-lg bg-opacity-20 py-5 px-3 w-[170px] flex-col rounded-xl mr-5">
                        <p className="flex text-white text-xl tracking-wide mb-3 text-black font-bold">
                            <img src="src/assets/eye.png" alt="wind icon" className="h-6 w-6 me-2" />Visiblity
                        </p>
                        <p className="text-white text-3xl text-center">{currentWeather?.current?.vis_km} mi</p>
                    </div>
                    <div className="flex bg-white backdrop-blur-lg bg-opacity-20 py-5 px-3 w-[170px] flex-col rounded-xl ">
                        <p className="flex text-white text-xl tracking-wide mb-3 text-black font-bold">
                            <img src="src/assets/humidity.png" alt="wind icon" className="h-6 w-6 me-2" />Humidity
                        </p>
                        <p className="text-white text-3xl text-center"> {currentWeather?.current?.humidity} %</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainTempture