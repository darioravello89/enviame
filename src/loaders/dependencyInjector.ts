import { Container } from 'typedi';
import LoggerInstance from './logger';
import { PrismaClient } from '@prisma/client';

export default () : void => {
  try {

    Container.set('logger', LoggerInstance);
    LoggerInstance.info('✅ Logger injected into container');

    Container.set('prisma', new PrismaClient());
    LoggerInstance.info('✅ Prisma client injected into container');

  } catch (e) {
    LoggerInstance.error('❌ Error on dependency injector loader: %o', e);
    throw e;
  }
};
