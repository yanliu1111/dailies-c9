"use strict";

const { checkLampPlugIn } = require("./checkLampPlugIn");

function fixLamp(lampPlugIn, bulbBured, askHelp) {
  console.log("start");
  console.log("Lamp doesn't work, did I plug in", lampPlugIn);
  checkLampPlugIn(lampPlugIn, bulbBured, askHelp);
  console.log("End!!!Lamp works");
}
// console.log("\n");
// console.log("Lamp broken, repair by myself");
// fixLamp(true, false, false);

console.log("\n");
console.log("Title: Buld burn, replace bulb");
fixLamp(true, true);
