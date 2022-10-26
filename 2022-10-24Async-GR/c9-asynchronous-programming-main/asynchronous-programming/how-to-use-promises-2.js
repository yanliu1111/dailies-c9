doSomethingAsync()
  .then(() => {
    // Each `.then()` returns a new Promise
    // Anything returned here will be passed to
    // the next `.then()` as an argument
    return 123;
  })
  .then((result) => {
    // Result contains the return value of the last Promise
    console.log(result); // 123
  });
