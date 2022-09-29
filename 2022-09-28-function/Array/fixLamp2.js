"use strict";

function fixLamp(lampPlugIn, bulbBured, askHelp) {
  console.log("start");
  console.log("Lamp doesnt work, did I plug in", lampPlugIn);
  if (!lampPlugIn) {
    console.log("I didn't plug lamp");
    console.log("Plug in lamp");
  } else {
    console.log("I did plug lamp");
    if (bulbBured) {
      console.log("bulb burned");
      console.log("Replace Bulb");
    } else {
      console.log("bulb doesnt't burned");
      console.log("Repair Lamp");
      if (askHelp) {
        console.log("I need help");
        console.log("Call someone");
      } else {
        console.log("I don't need help");
        console.log("Repair by myself");
      }
    }
  }
  console.log("End!!!Lamp works");
}
console.log("\n");
console.log("Lamp broken, repair by myself");
fixLamp(true, false, false);

console.log("\n");
console.log("Buld burn, replace bulb");
fixLamp(true, true);
