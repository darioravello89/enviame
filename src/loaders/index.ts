import expressLoader from './express';
import dependencyInjectorLoader from './dependencyInjector';
import jobsLoader from './jobs';
import Logger from './logger';
import express from 'express';

export default async ( app: express.Application) => {

  dependencyInjectorLoader();
  Logger.info('✅ Dependency Injector loaded');

  jobsLoader();
  Logger.info('✅ Jobs loaded');

  expressLoader( app );
  Logger.info('✅ Express loaded');

};
