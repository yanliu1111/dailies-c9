"use strict";
function getHelp(askHelp) {
  if (askHelp) {
    console.log("I need help");
    console.log("Call someone");
  } else {
    console.log("I don't need help");
    console.log("Repair by myself");
  }
}
module.exports = { getHelp };
