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
function addCoffeeGroundsToFilter() {
  console.log("add coffee grounds to filter");
}
module.exports = { checkForCoffeeBeans, grindBeans, addCoffeeGroundsToFilter };
