import pdf from 'pdf-parse'
import fs from 'fs'

export const extractTextFromPdf = async (filePath: string): Promise<string> => {
  const buffer = fs.readFileSync(filePath)
  const data = await pdf(buffer);
  return data.text;
}

