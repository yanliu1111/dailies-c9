// What do we expect this program to print?

const fruit = ['apple', 'banana', 'strawberry'];

function doSomething(fruit) {
  fruit.push('pineapple');
}

doSomething(fruit);

console.log(fruit);
