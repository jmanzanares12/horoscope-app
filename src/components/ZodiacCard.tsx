import { Link } from "react-router-dom"

interface ZodiacCardProps {
    zodiac: string;
}

const ZodiacCard: React.FC<ZodiacCardProps> = ({ zodiac }) => {
    return (
        <Link to={zodiac.toLowerCase()}>
            <h3>{zodiac}</h3>
        </Link>
    )
}

export default ZodiacCard