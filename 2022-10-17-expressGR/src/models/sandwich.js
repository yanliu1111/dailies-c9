let sandwiches = [
  {
    name: "ham",
    breadType: "rye",
    ingredients: ["ham", "mayo", "mustard", "pickles", "onions", "tomato"],
  },
  {
    name: "pb&j",
    breadType: "sourdough",
    ingredients: ["peanut butter", "jam"],
  },
  {
    name: "blt",
    breadType: "white",
    ingredients: ["bacon", "lettuce", "cheese"],
  },
];

export function listAllSanwiches() {
  return sanwiches;
}
export function createSandwich(sandwich) {
  sanwiches.push(sandwich);
}
export function deleteSandwich(sandwichName) {
  sandwiches = sandwiches.filter((s) => s.name !== sandwichName);
}
