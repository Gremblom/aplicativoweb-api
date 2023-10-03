import {MongoClient} from "mongodb"
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGO_URI;
const client = new MongoClient(url, {
    useNewUrlParser : true,
    useUnifiedTopology : true
});

const dbName = 'libreria';

async function main() {
  await client.connect();

  const db = client.db(dbName);

  return db;
}

export default main;