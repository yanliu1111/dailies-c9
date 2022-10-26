import fetch from 'node-fetch';

async function run() {
  const response = await fetch(
    'https://represent.opennorth.ca/postcodes/T2G0E7'
  );
  const result = await response.json();

  console.log(result);
}

run();
