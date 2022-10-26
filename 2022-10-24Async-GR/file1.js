import { incrementCount, getCount } from "./file2.js";
function main() {
  incrementCount();
  incrementCount();
  incrementCount();
}

main();
let count = getCount();
console.log(count);
