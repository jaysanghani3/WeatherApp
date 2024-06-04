import SharedContext from "../context/SharedContext";
import { useContext } from "react";

const DaysForcast = () => {
    const { currentWeather } = useContext(SharedContext);
    return (
        <div className="flex flex-col bg-[#265073] backdrop-blur-lg bg-opacity-20 p-4 py-7 rounded-2xl mb-6">
            <h2 className="flex"><img src="src/assets/dayforcast.png" alt="wind icon" className="h-6 w-6 me-2" />5 Days Forcast</h2><hr className="bg-black w-full mt-2" />
            <div className="flex justify-between">
                {
                    currentWeather?.forecast?.forecastday.map((item, index) => {
                        return (
                            <div key={index} className="flex items-center mt-8 p-3 mx-2 flex-col bg-[#265073] rounded-xl bg-opacity-20">
                                <p className="text-white text-sm">{item?.date.split('-')[2]}</p>
                                <p className="text-white text-2xl my-3">{item?.day?.avgtemp_c} <sup className="text-sm">&#8451;</sup></p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DaysForcast