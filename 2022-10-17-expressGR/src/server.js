import express from "express";

import { router as sandwichesRouter } from "./routes/sandwiches.js";
import { router as drinksRouter } from "./routes/drinks.js";
const app = express();
const port = 4000;
app.use(express.json());

app.use("/sandwiches", sandwichesRouter);
app.use("/drinks", drinksRouter);

app.listen(port, () => {
  console.log(`Web server running on port ${port}`);
});
//()func is callback
