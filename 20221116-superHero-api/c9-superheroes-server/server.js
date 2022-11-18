import express from "express";
import mongoose from "./db/mongoose.js";

import myConfig from "dotenv";
myConfig.config();

console.log("MONGODB_URI is", process.env.MONGO_DB_URI);
const app = express();
const PORT = 5001;

// import * as fred from
// import fred from

app.get("/slow", (req, res) => {
  console.log("delay for 3 seconds");
  setTimeout(() => {
    let seconds = new Date().getTime();
    res.send({ currentTime: seconds });
  }, 3000);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
