const {
  checkForCoffeeBeans,
  grindBeans,
  addCoffeeGroundsToFilter,
} = require("./coffeeBeans");

const {
  checkIfCoffeePotIsDirty,
  addFilter,
  addWaterToCoffeeMachine,
  startCoffeeMaker,
  wait,
} = require("./coffeeMachine");

function makeCoffee(outOfCoffeeBeans, coffeePotIsDirty) {
  console.log("start");
  checkForCoffeeBeans(outOfCoffeeBeans);
  grindBeans();
  checkIfCoffeePotIsDirty(coffeePotIsDirty);
  addFilter();
  addCoffeeGroundsToFilter();
  addWaterToCoffeeMachine();
  startCoffeeMaker();
  wait();
  console.log("end");
}

console.log("\n");
console.log("Starting process with no coffee beans and clean pot");
makeCoffee(true, false);
console.log("\n");
console.log("Starting process with coffee beans and dirty pot");
makeCoffee(false, true);
console.log("\n");
console.log("Starting process with coffee beans and clean pot");
makeCoffee(false, false);
console.log("\n");
console.log("Starting process with no coffee beans and dirty pot");
makeCoffee(true, true);
