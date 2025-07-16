import express from 'express'
import multer from 'multer'
import Router from 'express'
import resumeRouter from './resume.routes'
import interviewRouter from './interview.routes'
import metaRouter from './meta.routes'




const router = Router()

router.use('/resume', resumeRouter)
router.use('/interview', interviewRouter)
router.use('/meta', metaRouter)


export default router;
