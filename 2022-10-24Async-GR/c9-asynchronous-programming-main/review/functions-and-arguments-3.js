// What do we expect this program to print?

const person = {
  name: 'bob',
  age: 20,
};

function doSomething(person) {
  person.age += 5;
}

doSomething(person);

console.log(person.age);
