import type { Request, Response,NextFunction } from "express";
import { generateInterviewQuestions } from "../services/gemini.service";
import { prisma } from "../config/prisma";
import { generateFeedback } from "../services/feedback.service";



export const generateQuestionsHandler = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const { resumeId, jobDescription ,role } = req.body;
        const resume = await prisma.resume.findUnique({
            where: {
                id: resumeId
            }
        })

        if (!resume) return res.status(404).json({
            error: 'Resume Not Found'
        })
        const questions = await generateInterviewQuestions(resume.extractedText,jobDescription ,role)
        
        return res.status(200).json({
            questions
        })
    } catch (err) {
        next(err)
    }
}


export const submitAnswerHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { questionId, answer} = req.body

        const question = await prisma.question.findUnique({ where: {
            id: questionId
        }})

        if(!question) return res.status(404).json({
            error:'Question not found'
        })

        const { feedback, score } = await generateFeedback(question.question, answer)

        const updated = await prisma.question.update({
            where: { id: questionId },
            data: { answer, feedback, score }
        })

        res.status(200).json(updated)
    } catch (err) {
        next(err)
    }
}