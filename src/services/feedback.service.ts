import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "../config";
import { logger } from "../utils/logger";


const genAI = new GoogleGenerativeAI(config.geminiApiKey)

export const generateFeedback = async (question: string, answer: string): Promise<{ feedback: string; score: number}> => {
    const model = genAI.getGenerativeModel({ model: 'gemini-flash'})

    const prompt = `
        You're an AI interview assessor.
        Question: ${question}
        Answer: ${answer}

        Evaluate the canidate's answer and provide:
        1. A short feedback paragraph.
        2. A score out of 10 (as a number only).
    `;

    const result = await model.generateContent(prompt)
    const text = await result.response.text()

    logger.ai(`Feedback gnerated`, { question, answer, text})

    const scoreMatch = text.match(/(\d{1,2})/g)
    const score = scoreMatch ? parseInt(scoreMatch[0]) : 0

    return { feedback: text, score}

}