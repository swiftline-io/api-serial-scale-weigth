const { createLogger, format, transports} = require('winston');

let logger = createLogger ({
  level: 'info',
  format: format.json(),
  defaultMeta: { service: 'serial-gw-api' },
  transports: [
    new transports.Console(),
    new transports.File({filename: 'serial-gw-api.log'})
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.simple()
  }));
}

exports = module.exports = logger;