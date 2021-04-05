import winston from 'winston';
import config from '../config';

const transports = [];
if(process.env.NODE_ENV !== 'local') {
  transports.push(
    new winston.transports.Console({
      level: config.logs.level
    })
  )
} else {
  transports.push(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.cli(),
        winston.format.splat(),
      )
    })
  )
}

const LoggerInstance = winston.createLogger({
  level: config.logs.level,
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.align(),
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.printf(
      info => `${info.timestamp} ${info.level} ${info.message}`
    )
  ),
  transports
});

export default LoggerInstance;