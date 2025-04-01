import { useEffect, useState } from "react";
import { Zodiac } from "../types/zodiac";
import { horoscopes } from "../data/HoroscopeData";

export const useLocalZodiacDetails = (zodiac?: Zodiac) => {
    const [data, setData] = useState<string>('Charging...');

    useEffect(() => {
        if (zodiac) {
            const formattedZodiac = zodiac ? zodiac.charAt(0).toUpperCase() + zodiac.slice(1).toLowerCase() : '';
            setData(horoscopes[formattedZodiac as Zodiac] || 'No data found');
        }
    }, [zodiac])

    return data ?? 'Charging...';
}

