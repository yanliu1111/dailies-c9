function sayHelloFunc() {
  console.log('hello')
}


const myObject = {
  name: "Danielle",
  age: 35,
  sayHello: sayHelloFunc
}


const myObjectJSON = JSON.stringify(myObject)

console.log(myObjectJSON)