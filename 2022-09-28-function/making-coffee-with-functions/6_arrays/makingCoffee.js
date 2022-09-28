const { checkIfCoffeePotIsDirty } = require("./coffeePotFunctions");
const {
  grindCoffeeBeans,
  checkIfOutOfCoffeeBeans,
} = require("./coffeeBeanFunctions");
const {
  addFilterToCoffeeMachine,
  addCoffeeGroundsToFilter,
  addWaterToCoffeeMaker,
  startCoffeeMaker,
  waitForCoffeeToBrew,
} = require("./coffeeMachineFunctions");

const chocolateSprinkles = { name: "chocolate", cost: 0.5 };
const vanillaSprinkles = { name: "vanilla", cost: 0.35 };
const nutmegSprinkles = { name: "nutmeg", cost: 0.75 };
const podweredSugarSprinkles = { name: "powdered sugar", cost: 0.5 };

const coffeeSprinkles = [
  chocolateSprinkles,
  vanillaSprinkles,
  nutmegSprinkles,
  podweredSugarSprinkles,
];

function chooseRandomSprinkles(coffeeSprinkleChoices) {
  const numOfSprinkleChoices = coffeeSprinkleChoices.length;
  const randomIndex = Math.floor(numOfSprinkleChoices * Math.random());
  const randomSprinkle = coffeeSprinkleChoices[randomIndex];
  return randomSprinkle;
}

function addSprinklesToCoffee(sprinkle) {
  console.log("Adding", sprinkle.name, "sprinkles to my coffee.  They cost $", sprinkle.cost);
}

function makeCoffee(outOfCoffeeBeans, coffeePotIsDirty) {
  console.log("start");
  checkIfOutOfCoffeeBeans(outOfCoffeeBeans);
  grindCoffeeBeans();
  checkIfCoffeePotIsDirty(coffeePotIsDirty);
  addFilterToCoffeeMachine();
  addCoffeeGroundsToFilter();
  addWaterToCoffeeMaker();
  startCoffeeMaker();
  waitForCoffeeToBrew();
  const randomSprinkle = chooseRandomSprinkles(coffeeSprinkles);
  addSprinklesToCoffee(randomSprinkle);
  console.log("end");
}
console.log("\nmaking coffee with no beans and dirty pot");
makeCoffee(true, true);
console.log("\nmaking coffee with no beans and clean pot");
makeCoffee(true, false);
console.log("\nmaking coffee with beans and dirty pot");
makeCoffee(false, true);
console.log("\nmaking coffee with beans and clean pot");
makeCoffee(false, false);
