import mammoth from "mammoth";
import { ChangeEvent } from "react";
import { Order } from "../../../../../bff/generated/graphql";

const parseResponse = (response: string) => {
    const START_TOKEN = '```json';
    const OFFSET = 7
    const END_TOKEN = '```';
    const jsonStartIndex = response.indexOf(START_TOKEN) + OFFSET;
    const jsonEndIndex = response.indexOf(END_TOKEN, jsonStartIndex);
    const jsonString = response.slice(jsonStartIndex, jsonEndIndex);

    try {
        const parsedData = JSON.parse(jsonString);
        return parsedData;
    } catch (error) {
        console.error("Failed to parse JSON:", error);
    }
}


const parseTextToJson = async (extractedText: string) => {
    const apiKey = process.env.OPEN_AI_API_KEY;
    const url = process.env.URL_PARSE_ORDER;
    const MODEL = "gpt-4o-mini";
    const INSTRUCTION = "convert to json using camel case for keys";
    const MAX_TOKENS = 1000;
    try {
        if (!apiKey || !url) {
            return '';
        }
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: MODEL,
                "messages": [
                    {
                        "role": "user",
                        "content": `${INSTRUCTION} ${extractedText}`,
                    },

                ],
                max_tokens: MAX_TOKENS
            })
        });

        if (response.ok) {
            const data = await response.json();
            const parsedResponse = parseResponse(data.choices?.[0]?.message?.content);
            return parsedResponse;
        }
    } catch (error) {
        console.error('Error processing text:', error);
    }
};


const getTextFromDocx = async (file: File): Promise<string> => {
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    return result.value;
};


export const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>): Promise<Partial<Order> | undefined> => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
        try {
            const extractedText = await getTextFromDocx(file);
            const textToJsonOrder = await parseTextToJson(extractedText);
            return textToJsonOrder;
        } catch (error) {
            console.error('Error processing file:', error);
        }
    }
};