/*
console.log("hello world!");
console.error("");
console.info("");
console.warn("");
console.debug(""); // many types of print

const greeting = "Hello";
const subject = "world";
// const message = `${greeting} ${subject}!`;

console.log(greeting + " " + subject + "!"); // in line string
console.log(`${greeting} ${subject}!`); //templete literal
// console.log(message);

const isArriving = false;
let greeting;
const subject = "world";
if (isArriving) {
  greeting = "Hello";
} else {
  greeting = "Bye✋";
}
console.log(`${greeting} ${subject}!`);
//=assignment
// ==implicity equality
//===strict equality
*/

const isDinnerTime = true;
const hasFoodinDish = false;
const hasFoodinPantry = true;
const isFriday = true;

if (isDinnerTime) {
  console.log("Walk to dog dish");

  if (!hasFoodinDish) {
    console.log("walk to pantry");

    if (!hasFoodinPantry) {
      console.log("Drive to pet store");
      console.log("Buy pet food");
      console.log("Drive home");
      console.log("Pour food into pantry"); //alt+shif+down
    }
    if (isFriday) {
      console.log("Scoop treat into dog dish");
    } else {
      console.log("Scoop food into dog dish"); // Yes and no commind together in the end, same result in the end
    }
  }

  console.log("Dog eats dinner");
}
console.log("Chill until next dinner time");
