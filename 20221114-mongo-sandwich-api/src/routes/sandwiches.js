import express from "express";
import {
  createSandwich,
  deleteSandwich,
  listAllSanwiches,
  updateSandwich,
} from "../models/sandwich.js";
export const router = express.Router();

//list all sandwiches
router.get("/", async (req, res) => {
  const sandwiches = await listAllSanwiches();
  res.send(sandwiches);
});

//post for creating sandwiches
//create a new sandwich
router.post("/", async (req, res) => {
  const sandwich = req.body;
  await createSandwich(sandwich);
  res.send();
});
//Update a sanwich
router.patch("/:id", async (req, res) => {
  const sandwichId = req.params.id;
  const sandwich = req.body;
  await updateSandwich(sandwichId, sandwich);
  res.send();
});

//delete a  sandwich
//filter what to keep
router.delete("/:id", async (req, res) => {
  const sandwichID = req.params.id; //transfer string to num, when the id comes in
  await deleteSandwich(sandwichID);
  res.send();
  //   const filterSandwiches = sandwiches.filter(
  //     (sandwich) => sandwich.ingredients.length <= 3
  //   );
  //   console.log("Filtered: ", filterSandwiches);
  //   res.send("Original: ", sandwiches);
});
