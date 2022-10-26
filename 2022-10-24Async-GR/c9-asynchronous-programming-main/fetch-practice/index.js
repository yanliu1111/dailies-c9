import fetch from 'node-fetch';
import rl from 'readline-sync';

async function getRepresentativesResult(postalCode) {
  const response = await fetch(
    `https://represent.opennorth.ca/postcodes/${postalCode
      .toUpperCase()
      .replaceAll(' ', '')}`
  );

  if (response.status !== 200) {
    console.log('That is not a valid postal code');
    return;
  }

  const result = await response.json();

  return result;
}

async function run() {
  const postalCode = rl.question('What is your postal code? ');

  const result = await getRepresentativesResult(postalCode);

  const representatives = result.representatives_centroid;

  const mp = representatives.find((r) => r.elected_office === 'MP');

  console.log(`You live in ${result.city}, ${result.province}`);

  if (mp) {
    console.log(`Your MP is ${mp.name}`);
  }
}

run();
