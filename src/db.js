import mongoose from 'mongoose'
import appConfig from './config'
import {MongoMemoryServer} from 'mongodb-memory-server';
const mongod = new MongoMemoryServer();

export const connect = (config = appConfig) => {
  const props = {
    auth:{
      username: config.db.dbUser,
      password: config.db.dbPwd
    },
    authSource: "admin",
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
  return mongoose.connect(config.db.url, props)
}

export const closeDatabase = async () => {

  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
}

export const clearDatabase = async ()=>{

  const collections = mongoose.connection.collections;
  for(const key in collections){
    const collection = collections[key];
    await collection.deleteMany();
  }
}
