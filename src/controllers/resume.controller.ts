import { type Request, type Response, type NextFunction } from 'express'
import { extractTextFromPdf } from '../utils/pdfParser';



export const uploadResume = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const file = req.file;
    const { userId } = req.body;

    if (!file || !file.path.endsWith('.pdf')) {
      return res.status(400).json({
        error: 'Please Upload a PDF file'
      })
    }

    const text = await extractTextFromPdf(file.path)

    const resume = await prisma.resume.create({
      data: {
        userId,
        filePath: file.path,
        extractedText: text,
      },
    })


    return res.status(200).json({
      message: 'Resume Uploaded',
      resume
    })


  } catch (err) {
    next(err);
  }
}
