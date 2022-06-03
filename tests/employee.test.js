const Employee = require("../lib/employee");

test("Test to see if name function is working properly", () => {
    const name = "Jasper Barcial";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("Test to see if id function is working properly", () => {
    const id = "1";
    const employee = new Employee("Jasper Barcial", id, "jbarcial25@gmail.com");
    expect(employee.id).toBe(id);
});

test("Test to see if email function is working properly", () => {
    const email = "jbarcial25@gmail.com";
    const employee = new Employee("Jasper Barcial", 1, email);
    expect(employee.getEmail()).toBe(email);
});

test("Test to see if role function is working properly", () => {
    const role = "Employee";
    const employee = new Employee("Jasper Barcial", 1, "jbarcial25@gmail.com");
    expect(employee.getRole()).toBe(role);
});