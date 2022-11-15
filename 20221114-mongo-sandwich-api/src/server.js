import express from "express";
import mongoose from "mongoose";
import { router as sandwichesRouter } from "./routes/sandwiches.js";
import { router as drinksRouter } from "./routes/drinks.js";
import dotenv from "dotenv";
dotenv.config();
async function main() {
  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.MONGODB_DBNAME,
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PSSWORD,
  });
  console.log(`Connect to MongoDB database'${process.env.MONGODB_DBNAME}'`);
  //config PORT
  const app = express();
  const port = process.env.PORT;

  app.use(express.json());

  app.use("/sandwiches", sandwichesRouter);
  app.use("/drinks", drinksRouter);

  app.listen(port, () => {
    console.log(`Web server running on port ${port}`);
  });
}
main().catch((err) => console.error(err));
//()func is callback
