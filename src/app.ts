import 'reflect-metadata'; // We need this in order to use @Decorators
import config from './config';
import express from 'express';
import Logger from './loaders/logger';
const app = express();

async function startServer() {

    /**
     * Import/Export can only be used in top-level code
     * In node 10 without babel and at the time of writing
     */
    await require('./loaders').default( app );

    app.listen(config.port, () => {
        Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
    }).on('error', err => {
        Logger.error(err);
        process.exit(1);
    });

}

startServer();
