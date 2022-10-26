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

export function listAllSanwiches() {
  return sandwiches;
}
export function createSandwich(swi) {
  sandwiches.push(swi);
}
export function updateSandwich(id, sandwich) {
  const existingsandwiches = sandwiches.find((s) => s.id === id);
  Object.assign(existingsandwiches, sandwich);
}
export function deleteSandwich(id) {
  sandwiches = sandwiches.filter((s) => s.id !== id);
}
