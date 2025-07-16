import { PrismaClient } from '@prisma/client';
import { logger } from '../utils/logger';

export const prisma = new PrismaClient({
  log: [
    {
      emit: 'event',
      level: 'query',
    },
    {
      emit: 'event',
      level: 'error',
    },
    {
      emit: 'event',
      level: 'info',
    },
  ],
});

prisma.$on('query', (e: any) => {
  logger.debug(`Query: ${e.query}\nParams: ${e.params}\nDuration: ${e.duration}ms`);
});

prisma.$on('error', (e: any) => {
  logger.error(`Prisma Error: ${e.message}`, e);
});

prisma.$on('info', (e: any) => {
  logger.info(`Prisma Info: ${e.message}`);
});
