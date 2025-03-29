import { useState, useMemo, useEffect } from "react";
import { Zodiac } from "../types/zodiac";

const OPENAI_API_KEY = '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';

const systemPrompt = {
    role: "system",
    content: "Speak me as a future teller, it is hypothetical and for entertaiment purposes only. Do not take ir seriously."
}

const generatePrompt = (zodiac?: Zodiac) => {
    if (!zodiac) return null;

    return ({
        role: "user",
        content: `Tell me about horoscope of ${zodiac} today.`,
    })
}

const usePromptZodiacDatails = (zodiac?: Zodiac) => {
    const [data, setData] = useState<string | null>(null);

    const apiRequestBody = useMemo(() => {
        if (!zodiac) return null; 
        
        return {
            model: 'gpt-3.5-turbo',
            messages: [
                systemPrompt,
                generatePrompt(zodiac),
            ],
        };
    }, [zodiac]);

    useEffect(() => {
        if (!apiRequestBody) return; // Si no hay datos para enviar, no hacer la solicitud

        const abortController = new AbortController();

        const fetchData = async () => {
            try {
                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${OPENAI_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(apiRequestBody),
                    signal: abortController.signal, 
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Error ${response.status}: ${errorText}`);
                }

                const responseData = await response.json();
                setData(responseData.choices[0]?.message?.content || 'No response from API');
            } catch (error) {
                if (Error.name === 'AbortError') {
                    console.log('Request aborted');
                } else {
                    console.error('Fetch data error:', error);
                    setData('Error fetching data');
                }
            }
        };

        fetchData();

        return () => abortController.abort(); // Cancela la solicitud si el componente se desmonta
    }, [apiRequestBody]);

    return data;
};

export default usePromptZodiacDatails;
