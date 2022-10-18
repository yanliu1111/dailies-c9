import express from "express";
import {
  createSandwich,
  deleteSandwich,
  listAllSanwiches,
} from "../models/sandwich.js";
export const router = express.Router;

//list all sandwiches
router.get("/", (req, res) => {
  const sandwiches = listAllSanwiches();
  res.send(sandwiches);
});
//post for creating sandwiches
//create a new sandwich
router.post("/", (req, res) => {
  const sandwich = req.body;
  createSandwich(sandwich);
  sandwiches.push(sandwich);
  // console.log(sandwich.name);
  res.send();
});
//delete a  sandwich
//filter what to keep
router.delete("/", (req, res) => {
  const sandwich = req.body;
  deleteSandwich(sandwich.name);
  console.log(sandwich);
  sandwiches = sandwiches.filter((s) => s.name !== sandwich.name);

  res.send();
  //   const filterSandwiches = sandwiches.filter(
  //     (sandwich) => sandwich.ingredients.length <= 3
  //   );
  //   console.log("Filtered: ", filterSandwiches);
  //   res.send("Original: ", sandwiches);
});
