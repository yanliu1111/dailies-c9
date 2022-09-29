"use strict";

const { getHelp } = require("./getHelp");

function checkBulbBurn(bulbBured, askHelp) {
  if (bulbBured) {
    console.log("bulb burned");
    console.log("Replace Bulb");
  } else {
    console.log("bulb doesn't burned");
    console.log("Repair Lamp");
    getHelp(askHelp);
  }
}

function checkLampPlugIn(lampPlugIn, bulbBured, askHelp) {
  if (!lampPlugIn) {
    console.log("I didn't plug lamp");
    console.log("Plug in lamp");
  } else {
    console.log("I did plug lamp");
    checkBulbBurn(bulbBured, askHelp);
  }
}

function fixLamp(lampPlugIn, bulbBured, askHelp) {
  console.log("start");
  console.log("Lamp doesnt work, did I plug in", lampPlugIn);
  checkLampPlugIn(lampPlugIn, bulbBured, askHelp);
  console.log("End!!!Lamp works");
}
console.log("\n");
console.log("Lamp broken, repair by myself");
fixLamp(true, false, false);

// console.log("\n");
// console.log("Buld burn, replace bulb");
// fixLamp(true, true);
