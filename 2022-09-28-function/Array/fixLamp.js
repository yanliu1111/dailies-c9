"use strict";

const lampPlugIn = true;
const bulbBured = true;
const askHelp = false;

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

/*
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
*/
