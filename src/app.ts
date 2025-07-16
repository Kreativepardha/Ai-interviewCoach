import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import mainRouter from './routes/mainRouter'
import { requestIdMiddleware } from './middlewares/requestId'
import { rateMeter } from './middlewares/rateMeter'



export const app = express()

app.use(express.json())
app.use(helmet())
app.use(morgan('dev'))
app.use(requestIdMiddleware)
app.use(rateMeter)
app.use('/uploads', express.static('uploads'))

app.use('/api/v1', mainRouter)

// app.use(errorHandler)



export default app;
