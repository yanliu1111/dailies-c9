// What do we expect this program to print?

function doSomething() {
  console.log('Do something');
}

setTimeout(() => {
  console.log('Do something else');
}, 1000);

doSomething();
