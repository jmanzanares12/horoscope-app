import ZodiacCard from "../components/ZodiacCard"
import { ZODIAC_NAMES } from "../constants/zodiac"

const Home = () => {
    return (
        <div>
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