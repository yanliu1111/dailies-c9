import express from "express";

import{router as sandwichRouter} from "./routes/sandwiches.js";
import{router as drinkRouter} from "./routes/drinks.js"

const app = express();
const port = 4000;
app.use(express.json());

app.use("/sandwiches", router as sandwichRouter);
app.use("/drink", router as drinkRouter);

app.listen(port, () => {
  console.log(`Web server running on port ${port}`);
});
//()func is callback
