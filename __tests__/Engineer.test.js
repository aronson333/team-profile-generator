const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "username";
  const e = new Engineer("Bob", 1, "test@email.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Bob", 1, "test@email.com", "username");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "username";
  const e = new Engineer("Bob", 1, "test@email.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});