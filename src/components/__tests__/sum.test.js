import sum from "../Sum";

test("Sum function should return sum of two numbers", () => {
  const result = sum(2, 7);

  // Assertion
  expect(result).toBe(9);
});
