"use strict";
const { checkBulbBurn } = require("./checkBulbBurn");

function checkLampPlugIn(lampPlugIn, bulbBured, askHelp) {
  if (!lampPlugIn) {
    console.log("I didn't plug lamp");
    console.log("Plug in lamp");
  } else {
    console.log("I did plug lamp");
    checkBulbBurn(bulbBured, askHelp);
  }
}
exports.checkLampPlugIn = checkLampPlugIn;
