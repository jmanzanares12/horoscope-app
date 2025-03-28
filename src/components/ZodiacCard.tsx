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
            className="w-60 h-60 rounded-lg border-2 border-gray-800 flex flex-col justify-center items-center"
        >
            <img src={imgSrc} alt={zodiac} className="w-36 h-36 rounded-full" />
            <h3>{zodiac}</h3>
        </Link>
    )
}

export default ZodiacCard