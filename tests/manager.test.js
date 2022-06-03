const { expect } = require('@jest/globals');
const Manager = require("../lib/manager");

test("Test to see if office number function is working properly", () => {
    const officeNumber = "432562";
    const employee = new Manager("Jasper", 1, "Jbarcial25@gmail.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
  });

  test("Test to see if role returns as Manager as expected", () => {
    const role = "Manager";
    const employee = new Manager("Jasper", 1, "Jbarcial25@gmail.com", "Jasper Barcial");
    expect(employee.getRole()).toBe(role);
  });