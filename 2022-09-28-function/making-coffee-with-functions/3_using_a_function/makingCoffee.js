function makeCoffee(outOfCoffeeBeans, coffeePotIsDirty) {
  console.log("start");
  console.log("am I out of coffee beans?", outOfCoffeeBeans);
  if (outOfCoffeeBeans) {
    console.log("add coffee beans to shopping list");
    console.log("buy coffee beans");
  }
  console.log("grind beans");
  console.log("is the coffee pot dirty?", coffeePotIsDirty);
  if (coffeePotIsDirty) {
    console.log("clean the pot");
  }
  console.log("add filter to coffee machine");
  console.log("add coffee grounds to filter");
  console.log("add water to coffee machine");
  console.log("start coffee maker");
  console.log("wait for coffee to finish brewing");
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
