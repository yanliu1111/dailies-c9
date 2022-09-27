"use strict";

const lampPlugIn = true;
const bulbBured = true;
const lampWorks = false;
const askHelp = true;

if (!lampPlugIn) {
  console.log("Plug in lamp");

  if (!lampWorks) {
    console.log("if bulb bured?");
    if (bulbBured) {
        console.log("Replace bulb");
        if (lampWorks) {
          console.log("🎉Lamp works!");
      }else {
        console.log("repair lamp");
        if (askHelp) {
          console.log("Call expert!");
        } else {
          console.log("Repair by myself");
        }
    }
}
}  
  
else {
  if (bulbBured) {
    console.log("Replace bulb");
    if (lampWorks) {
      console.log("🎉Lamp works!");
    }
  } else {
    console.log("repair lamp");
    if (askHelp) {
      console.log("Call expert!");
    } else {
      console.log("Repair by myself");
    }
  }
}
console.log("🎉Lamp works!");
