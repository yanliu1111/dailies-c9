let count = 0;
function incrementCount() {
  count++;
  console.log(count);
}
function getCount() {
  return count;
}

export { incrementCount, getCount };
