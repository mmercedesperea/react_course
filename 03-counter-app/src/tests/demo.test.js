console.log("hhelloooo");

describe("test in demo.test.js", () => {
  test("Should be the same", () => {
    const message = "hi";

    const message2 = "hi";

    expect(message).toBe(message2);
  });
});
