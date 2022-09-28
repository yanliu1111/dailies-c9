function cleanCoffeePot() {
  console.log("clean the coffee pot");
}
function checkIfCoffeePotIsDirty(coffeePotIsDirty) {
  console.log("is my coffee pot dirty?", coffeePotIsDirty);

  if (coffeePotIsDirty) {
    cleanCoffeePot();
  }
}

module.exports = { checkIfCoffeePotIsDirty };
