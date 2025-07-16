import express from 'express'
import multer from 'multer'
import Router from 'express'
import { uploadResume } from '../controllers/resume.controller'


const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = Router()


router.post('/upload', upload.single('resume'), uploadResume)


export default router;
