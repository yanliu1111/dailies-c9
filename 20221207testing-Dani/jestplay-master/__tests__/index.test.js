describe("Arrays", () => {
  it("should increase length after push", () => {
    // setup
    let newArray = [];
    let newItem = "Hello";
    //excute
    newArray.push(newItem);
    //validate
    expect(newArray.length).toBe(1); //toBe is compared to ===, length will be 1
    // expect(newArray.length).not.toBe(2)
  });
  //   it("should fail", () => {
  //     expect(true).not.toBeTruthy();
  //   });
  it("should increase length after push", () => {
    // setup
    //excute
    let newArray = [];

    //validate
    expect(Array.isArray(newArray)).toBeTruthy(); //toBe(true) toEqual(true)
  });
});

describe("Objects", () => {
  it("should have keys", () => {
    let newObject = {};

    expect(Object.keys(newObject)).toBeInstanceOf(Array);
  });
});
