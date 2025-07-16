import express, { Router } from 'express'
import { submitAnswerHandler } from '../controllers/interview.controller';


const router = Router()

router.post('/submit-answer', submitAnswerHandler);



export default router