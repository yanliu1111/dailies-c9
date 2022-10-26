import fetch from 'node-fetch';
import rl from 'readline-sync';

export async function fetchWithThrow(url) {
  const response = await fetch(url);

  if (response.status !== 200) {
    throw new Error('Fetch request failed');
  }

  return response;
}

async function run() {
  const postalCode = rl.question('What is your postal code? ');

  try {
    const response = await fetchWithThrow(
      `https://represent.opennorth.ca/postcodes/${postalCode
        .toUpperCase()
        .replaceAll(' ', '')}`
    );

    const result = await response.json();

    console.log(`You live in ${result.city}, ${result.province}`);
  } catch (err) {
    console.log(err);
  }
}

run();
