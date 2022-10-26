// Functions need a special `async` keyword in order to use `await`
async function run() {
  // `await` prevents future code from running (in this scope)
  // until the Promise resolves
  await doSomethingAsync();

  console.log('This will only run after the previous Promise resolves');
}

// `run` automatically returns a Promise, because it was declared `async`
run();
