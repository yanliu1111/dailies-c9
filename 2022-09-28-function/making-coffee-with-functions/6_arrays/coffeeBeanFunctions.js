function buyCoffeeBeans() {
  console.log("walk to store");
  console.log("find coffee beans in store");
}

function checkIfOutOfCoffeeBeans(outOfCoffeeBeans) {
  console.log("am I out of coffee beans?", outOfCoffeeBeans);

  if (outOfCoffeeBeans) {
    console.log("add coffee beans to shopping list");
    buyCoffeeBeans();
  }
}

function grindCoffeeBeans() {
  console.log("grind beans");
}

module.exports = {
  buyCoffeeBeans,
  grindCoffeeBeans,
  checkIfOutOfCoffeeBeans,
};
