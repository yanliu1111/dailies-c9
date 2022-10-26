import express from "express";
import {
  createSandwich,
  deleteSandwich,
  listAllSanwiches,
  updateSandwich,
} from "../models/sandwich.js";
export const router = express.Router();

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
  res.send();
});
//Update a sanwich
router.patch("/:id", (req, res) => {
  const sandwichId = Number(req.params.id);
  const sandwich = req.body;

  updateSandwich(sandwichId, sandwich);
  res.send();
});

//delete a  sandwich
//filter what to keep
router.delete("/:id", (req, res) => {
  const sandwichID = Number(req.params.id); //transfer string to num, when the id comes in
  deleteSandwich(sandwichID);
  res.send();
  //   const filterSandwiches = sandwiches.filter(
  //     (sandwich) => sandwich.ingredients.length <= 3
  //   );
  //   console.log("Filtered: ", filterSandwiches);
  //   res.send("Original: ", sandwiches);
});
