async function main() {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Hello");
      resolve();
    }, 1000);
  });
  console.log("World");
}
main();
