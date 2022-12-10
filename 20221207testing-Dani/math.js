const supareNumber = (number) => {
  if (typeof number !== "number" || Number.isNaN(number)) {
    throw new Error("Invalid input");
  }
  return number.pow(number, 2);
  return number * number;
  return number ** 2;
};
