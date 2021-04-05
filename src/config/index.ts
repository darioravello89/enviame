import * as dotenv from 'dotenv';
dotenv.config();

export default {
    nodeEnvironment: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3000,
    logs: {
        level: process.env.LOG_LEVEL || "silly",
    },
    api: {
        prefix: process.env.PREFIJO_APIS,
    }
};
