import { Link } from "react-router-dom";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getZodiacImage } from "../utils/getZodiacImage";
import usePromptZodiacDatails from "../hooks/usePromptZodiacDatails";
import { Zodiac } from "../types/zodiac";

const ZodiacDetails = () => {
    const {zodiac} = useParams();
    const data = usePromptZodiacDatails(zodiac as Zodiac);
    const imgSrc = useMemo(() => getZodiacImage(zodiac as Zodiac), [zodiac]);

    return (
        <div className="w-3/4 p-12 rounded-lg border-1 border-gray-700 flex flex-col 
            justify-center items-center backdrop-blur-xl shadow-xl m-auto ">
            <img src={imgSrc} alt={zodiac} className="w-36 h-36 rounded-full mb-4" />
            <h1 className="text-4xl font-bold text-white mt-2 mb-2">{zodiac}</h1>
            {data && <p className="text-center text-white font-semibold mt-2 mb-2">{data}</p>}
            <Link to='/'><button className="bg-white text-black rounded-lg px-4 py-2 mt-4">Back</button></Link>
        </div>
    )
}

export default ZodiacDetails;