const Manager = require('../lib/Manager');

test('Creates Manager Object', () => {
    const manager = new Manager('New Challenger', 3, 'fight@fakemail.com', 9999);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('Gets the ROLE', () => {
    const manager = new Manager('New Challenger', 3, 'fight@fakemail.com', 9999);

    expect(manager.getRole()).toEqual('Manager');
});