const Employee = require('../lib/Employee')

test('Creates Employee Object', () => {
    const employee = new Employee('New Challenger', 3, 'fight@fakemail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('Gets the Employee NAME', () => {
    const employee = new Employee('New Challenger', 3, 'fight@fakemail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('Gets the Employee ID', () => {
    const employee = new Employee('New Challenger', 3, 'fight@fakemail.com');

    expect(employee.getID()).toEqual(expect.any(Number));
});

test('Gets the Employee EMAIL', () => {
    const employee = new Employee('New Challenger', 3, 'fight@fakemail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});