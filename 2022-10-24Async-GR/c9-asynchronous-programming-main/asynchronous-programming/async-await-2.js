async function run() {
  try {
    await doSomethingAsync();
  } catch (err) {
    // This is equivalent to the `.catch()` method
  }
}

run();
