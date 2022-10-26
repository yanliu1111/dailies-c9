const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

sleep(1000)
  .then(() => {
    console.log('A long time ago in a galaxy far, far away...');
    return sleep(1000);
  })
  .then(() => {
    console.log('Turmoil has engulfed the Galactic Republic...');
    return sleep(1000);
  })
  .then(() => {
    console.log('Hoping to resolve the matter with a blockade of deadly...');
    return sleep(1000);
  })
  .then(() => {
    console.log('While the Congress of the Republic endlessly debates...');
  });
