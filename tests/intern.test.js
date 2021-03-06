const { expect } = require('@jest/globals');
const Intern = require("../lib/intern");

test("Test to see if university attended function is working properly", () => {
    const school = "UCI Bootcamp";
    const employee = new Intern("Jasper", 1, "Jbarcial25@gmail.com", school);
    expect(employee.school).toBe(school);
  });

  test("Test to see if role returns intern as expected", () => {
    const role = "Intern";
    const employee = new Intern("Jasper", 1, "Jbarcial25@gmail.com", "Jasper Barcial");
    expect(employee.getRole()).toBe(role);
  });