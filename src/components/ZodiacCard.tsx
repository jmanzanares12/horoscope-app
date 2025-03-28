import { useMemo } from "react";
import { getZodiacImage } from "../utils/getZodiacImage";
import { Link } from "react-router-dom"
import { Zodiac } from "../types/zodiac";

interface ZodiacCardProps {
    zodiac: Zodiac;
}

const ZodiacCard: React.FC<ZodiacCardProps> = ({ zodiac }) => {
    const imgSrc = useMemo(() => getZodiacImage(zodiac), [zodiac]);
    return (
        <Link 
            to={zodiac.toLowerCase()} 
            className="w-60 h-60 rounded-lg border-2 border-gray-700 flex flex-col 
            justify-center items-center backdrop-blur-xl shadow-xl m-auto hover:scale-110 
            transition-transform duration-500"
        >
            <img src={imgSrc} alt={zodiac} className="w-36 h-36 rounded-full" />
            <h3 className="text-center text-white text-2xl font-bold mt-2 py-2">{zodiac}</h3>
        </Link>
    )
}

export default ZodiacCard