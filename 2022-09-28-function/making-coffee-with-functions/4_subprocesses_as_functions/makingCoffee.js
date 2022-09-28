function checkForCoffeeBeans(outOfCoffeeBeans) {
  console.log("am I out of coffee beans?", outOfCoffeeBeans);
  if (outOfCoffeeBeans) {
    console.log("add coffee beans to shopping list");
    console.log("buy coffee beans");
  }
}
function grindBeans() {
  console.log("grind beans");
}

function checkIfCoffeePotIsDirty(coffeePotIsDirty) {
  console.log("is the coffee pot dirty?", coffeePotIsDirty);
  if (coffeePotIsDirty) {
    console.log("clean the pot");
  }
}

function addFilter() {
  console.log("add filter to coffee machine");
}

function addCoffeeGroundsToFilter() {
  console.log("add coffee grounds to filter");
}

function addWaterToCoffeeMachine() {
  console.log("add water to coffee machine");
}

function startCoffeeMaker() {
  console.log("start coffee maker");
}
function wait() {
  console.log("wait for coffee to finish brewing");
}

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
