import express from "express";
import {
  createdrink,
  deletedrink,
  listAlldrinks,
  updateDrink,
} from "../models/drink.js";
export const router = express.Router();

//list all drinks
router.get("/", (req, res) => {
  const drinks = listAlldrinks();
  res.send(drinks);
});

//post for creating sandwiches
router.post("/", (req, res) => {
  const drink = req.body;
  createdrink(drink);
  res.send();
});
//Update a drink
router.patch("/:id", (req, res) => {
  const dirnkId = Number(req.params.id);
  const drink = req.body;

  updateDrink(dirnkId, drink);
  res.send();
});

//delete a  sandwich
router.delete("/:id", (req, res) => {
  const dirnkId = Number(req.params.id);
  deletedrink(dirnkId);
  res.send();
});
