import { GoogleGenerativeAI } from '@google/generative-ai'
import e from 'express'
import { config } from '../config'
import { string } from 'zod';
import { basePrompt } from '../prompts/basePrompt';
import { generateContextPrompt } from '../prompts/contextPrompt';
import { logger } from '../utils/logger';

const genAI = new GoogleGenerativeAI(config.geminiApiKey)

export const generateInterviewQuestions  = async (
  resumeText: string,
  jobDescription: string,
  role: string
): Promise<string[]> => {

  const prompt = `${basePrompt}\n${generateContextPrompt(resumeText, jobDescription, role)}`;
  const model = genAI.getGenerativeModel({ model: 'gemini-flash'})

  const result = await model.generateContent(prompt)
  const text = await result.response.text()

  logger.ai(`Generated interview questions from Gemini`, {
    prompt, response: text
  })

  return text
    .split(`\n`)
    .map((line) => line.trim())
    .filter((line) => line.length > 10)
}

