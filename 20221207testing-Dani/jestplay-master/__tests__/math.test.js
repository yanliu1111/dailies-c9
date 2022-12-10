describe("");

describe("square function", () => {
  it("should return the square of a number", () => {
    const number = Math.ceil(Math.random() * 10);
    const correctAnswer = number * number;
    //excute
    const result = square(number);
    //validate
    expect(result).toBe(25);
  });

  it("should throw an error when pass a string", () => {
    const number = "Hello";
    // const result = square(number);
    expect(() => squareNumber(number)).toThrow("Invilid input");
  });
});
