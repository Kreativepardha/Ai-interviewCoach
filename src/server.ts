import { app } from './app'
import dotenv from 'dotenv'
import { logger } from './utils/logger';
import { config } from './config';

dotenv.config()


app.listen(config.port, () => {
  logger.info(`Server running at http://localhost:${config.port}`)
})



