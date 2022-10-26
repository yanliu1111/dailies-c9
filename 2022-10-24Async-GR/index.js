import { resolve } from "path";

/*
let a = 1;
{
  let b = 2;
  let c = 3;
  console.log("a: ", a); //1
  {
    let c = 4;
    let d = a + b;
    c += d;
    console.log("c: ", c);//7
    console.log("d: ", d);//3
  }
  a += c;
  console.log("a: ", a);//4
  console.log("d: ", d);//undifined
}

let a = 5;
function dosomething(a) {
  a += 2;
  return;
}
dosomething(a); //didnt assign to a
console.log(a); //5 

let a = 5;
function dosomething() {
  a += 2;
  return;
}
dosomething(a); //didnt assign to a
console.log(a); //7


const person = {
  name: "bob",
  age: 20,
};
function dosomething(p) {
  p.age += 5;
}
dosomething(person);
console.log(person.age);

function dosomething() {
  console.log("Do something");
}
setTimeout(() => {
  console.log("Do something else");
}, 0); //non block, async func, start when I call

dosomething(); //sync first

const sleep = (delay) => new Promise(resolve);

doSomethingAsyn()
  .then(() => {
    return 123;
  })
  .then((result) => {
    console.log(result); //123
  });
*/

import fetch from "node-fetch";
import rl from "readline-sync";
import { CLIENT_RENEG_LIMIT } from "tls";

async function getRepresentativesResult(postalCode) {
  const response = await fetch(
    `https://represent.opennorth.ca/postcodes/${postalCode
      .toUpperCase()
      .replaceAll(" ", "")}`
  );
  if (response.status !== 200) {
    console.log("That is not a valid postal code");
    return;
  }

  const result = await response.json();
  return result;
}

async function run() {
  const prostalCode = rl.question("what is your postal code?");

  //   const result = await response.text();
  //   const formattedResult = JSON.parse(result);
  const representativesResult = await getRepresentativesResult(prostalCode);

  const representatives = representativesResult.representatives_centroid;
  /*
  for (const i in representatives) {
    console.log(i);
  } //0-3
*/
  // let mp;
  //   for (const representative of representatives) {
  //     console.log(representative);
  //     if (representative.elected_office === "MP") {
  //       console.log("found MP", representative);
  //       mp = representative;
  //     }
  //   }
  //   const mps = representatives.filter((r) => r.elected_office === "MP");

  const mp = representatives.find((r) => r.elected_office === "MP");
  //   console.log(mp);
  console.log(
    `You live in ${representativesResult.city},${representativesResult.province}`
  );
  if (mp) {
    console.log(`Your MP is ${mp.name}`);
  }
}

run();
