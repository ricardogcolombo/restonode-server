process.env.NODE_ENV = process.env.NODE_ENV || 'development'

let envConfig;

switch (process.env.NODE_ENV ) {
  case 'test':
  case 'testing':
    envConfig = require('dotenv').config({path:'../.env.test'})
    break;
  case 'prod':
  case 'production':
    envConfig = require('dotenv').config({path:'../.env.test'})
  default:
    envConfig = require('dotenv').config({path:'../.env.dev'})
}
const baseConfig = {
  expireTime: '30d',
  secrets: {},
  db:{url:`mongodb://${envConfig.DB_USER}:${envConfig.DB_PASSWORD}@${envConfig.DB_HOST}:${envConfig.DB_PORT}/${envConfig.DB_NAME}`}
}
export default baseConfig;
