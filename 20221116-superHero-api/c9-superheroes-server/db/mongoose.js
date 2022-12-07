import mongoose from "mongoose";
import myConfig from "dotenv";
myConfig.config();

import debug from "debug";
let debug = debug("app:mongoose");

const connectionString = () => {
  

const connectionString =
  process.env.MONGODB_URI || "mongodb://localhost:27017/superheroes";
mongoose.connect(connectionString, () => {
  debug(`connected to mongoose on ${connectionString}`);
});

export default mongoose;

console.log(`Connect to MongoDB database'${process.env.MONGODB_DBNAME}'`);
