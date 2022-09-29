"use strict";
const { getHelp } = require("./getHelp");
const { getBulb } = require("./getBulb");

// const getRandomLamp = (lampItems) => {
//   const length = lampItems.length;
//   const randomIndex = Math.floor(Math.random() * length);
//   return lampItems[randomIndex];
// };

// const getBulb = () => {
//   console.log("Go to store");
//   console.log("Choose a Bulb");
//   const lampTypes = ["blue", "yellow", "rainbow", "white"];
//   const randomLamp = getRandomLamp(lampTypes);
//   console.log(`pick ${randomLamp} light for bulb changing`);
// };

function checkBulbBurn(bulbBured, askHelp) {
  if (bulbBured) {
    console.log("bulb burned");
    console.log("Replace Bulb");
    getBulb();
  } else {
    console.log("bulb doesn't burned");
    console.log("Repair Lamp");
    getHelp(askHelp);
  }
}
exports.checkBulbBurn = checkBulbBurn;
