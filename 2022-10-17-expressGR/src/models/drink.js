let drinks = [
  { id: 1, name: "cock" },
  { id: 2, name: "shirly temple " },
  { id: 3, name: "manhattan" },
  { id: 4, name: "ale" },
];

export function listAlldrinks() {
  return drinks;
}
export function createdrink(drk) {
  drinks.push(drk);
}

export function updateDrink(id, drink) {
  const existingdrinks = drinks.find((d) => d.id === id);
  Object.assign(existingdrinks, drink);
}

export function deletedrink(id) {
  drinks = drinks.filter((d) => d.id != id);
}
