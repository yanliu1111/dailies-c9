import mongoose from "mongoose";

let sandwiches = [
  {
    id: 1,
    name: "ham",
    breadType: "rye",
    ingredients: ["ham", "mayo", "mustard", "pickles", "onions", "tomato"],
  },
  {
    id: 2,
    name: "pb&j",
    breadType: "sourdough",
    ingredients: ["peanut butter", "jam"],
  },
  {
    id: 3,
    name: "blt",
    breadType: "white",
    ingredients: ["bacon", "lettuce", "cheese"],
  },
];
const sandwichSchema = new mongoose.Schema({
  name: String,
  breadType: String,
  ingredients: [String],
});

const Sandwich = mongoose.model("Sandwich", sandwichSchema);

export async function listAllSanwiches() {
  const sandwiches = await Sandwich.find();
  return sandwiches;
}
export async function createSandwich(sandwich) {
  // sandwiches.push(swi);
  await Sandwich.create(sandwich);
}
export async function updateSandwich(id, sandwich) {
  await Sandwich.findByIdAndUpdate(id, sandwich);
}
export async function deleteSandwich(id) {
  await Sandwich.findByIdAndDelete(id);
}
