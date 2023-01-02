const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "University of Houston";
  const e = new Intern("Bob", 1, "test@email.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Bob", 1, "test@email.com", "University of Houston");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "University of Houston";
  const e = new Intern("Bob", 1, "test@email.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});