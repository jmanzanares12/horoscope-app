import ZodiacCard from "../components/ZodiacCard"
import { ZODIAC_NAMES } from "../constants/zodiac"

const Home = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {ZODIAC_NAMES.map((zodiac) => (
                <ZodiacCard
                    key={zodiac}
                    zodiac={zodiac}
                />
            ))}
        </div>
    )
}

export default Home