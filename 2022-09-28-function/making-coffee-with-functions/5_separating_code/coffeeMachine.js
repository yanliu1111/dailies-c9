function checkIfCoffeePotIsDirty(coffeePotIsDirty) {
  console.log("is the coffee pot dirty?", coffeePotIsDirty);
  if (coffeePotIsDirty) {
    console.log("clean the pot");
  }
}

function addFilter() {
  console.log("add filter to coffee machine");
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

module.exports = {
  addFilter,
  checkIfCoffeePotIsDirty,
  addWaterToCoffeeMachine,
  startCoffeeMaker,
  wait
};
