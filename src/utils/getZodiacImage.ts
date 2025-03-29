import aquarius from "../assets/aquarius.png"
import aries from "../assets/aries.png"
import cancer from "../assets/cancer.png"
import capricorn from "../assets/capricorn.png"
import gemini from "../assets/gemini.png"
import leo from "../assets/leo.png"
import libra from "../assets/libra.png"
import pisces from "../assets/pisces.png"
import sagittarius from "../assets/sagittarius.png"
import scorpio from "../assets/scorpio.png"
import taurus from "../assets/taurus.png"
import virgo from "../assets/virgo.png"
import { Zodiac } from "../types/zodiac"

const imgMap: Record<string, string> = {
    aquarius: aquarius,
    aries: aries,
    cancer: cancer,
    capricorn: capricorn,
    gemini: gemini,
    leo: leo,
    libra: libra,
    pisces: pisces,
    sagittarius: sagittarius,
    scorpio: scorpio,
    taurus: taurus,
    virgo: virgo,
}

export const getZodiacImage = (zodiac: Zodiac) : string => imgMap[zodiac.toLowerCase()] || '';