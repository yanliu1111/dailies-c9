const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function run() {
  await sleep(1000);
  console.log('A long time ago in a galaxy far, far away...');
  await sleep(1000);
  console.log('Turmoil has engulfed the Galactic Republic...');
  await sleep(1000);
  console.log('Hoping to resolve the matter with a blockade of deadly...');
  await sleep(1000);
  console.log('While the Congress of the Republic endlessly debates...');
}

run();
