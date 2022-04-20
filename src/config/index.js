let envConfig;

switch (process.env.NODE_ENV ) {
  case 'test':
  case 'testing':
    envConfig = require('dotenv').config({path:'./.env.test'}).parsed
    break;
  case 'prod':
  case 'production':
    envConfig = require('dotenv').config({path:'./.env.test'}).parsed
  default:
    envConfig = require('dotenv').config({path:'./.env.dev'}).parsed
}
const dbUrl= `mongodb://${envConfig.DB_HOST}:${envConfig.DB_PORT}/${envConfig.DB_NAME}`;
const baseConfig = {
  expireTime: '30d',
  secrets: {},
  db:{
    url:dbUrl,
    dbUser: envConfig.DB_USER,
    dbPwd: envConfig.DB_PASSWD
  }
}
export default baseConfig;
