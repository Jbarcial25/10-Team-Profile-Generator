const { expect } = require('@jest/globals');
const Engineer = require("../lib/engineer");

test("Test to see if github username is functioning properly", () => {
    const github = "Jbarcial25";
    const employee = new Engineer("Rachel", 1, "jbarcial25@gmail.com", github);
    expect(employee.github).toBe(github);
  });

  test("Test to see if role returns as Engineer", () => {
    const role = "Engineer";
    const employee = new Engineer("Jasper", 1, "jbarcial25@gmail.com", "Jasper barcial");
    expect(employee.getRole()).toBe(role);
  });