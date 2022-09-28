const coffeeSprinkles = ["nutmeg", "chocolate", "powdered sugar"];

const numOfSprinkleChoices = coffeeSprinkles.length;
const randomIndex = Math.floor(numOfSprinkleChoices * Math.random());
console.log(randomIndex)
const randomSprinkle = coffeeSprinkles[randomIndex];



const coffeeSprinkles = ["nutmeg", "chocolate", "powdered sugar"];
const chocolateSprinklesIndex = coffeeSprinkles.indexOf("chocolate");
// console.log(chocolateSprinklesIndex)

coffeeSprinkles.forEach(function (sprinkle) {
  console.log("adding", sprinkle, "to coffee");
});