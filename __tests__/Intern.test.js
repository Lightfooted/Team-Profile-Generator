const Intern = require('../lib/Intern');

test('Creates Intern Object', () => {
    const intern = new Intern('New Challenger', 3, 'fight@fakemail.com', 'UniVer');
    
    expect(intern.school).toEqual(expect.any(String));
});

test('Gets the Interns SCHOOL', () => {
    const intern = new Intern('New Challenger', 3, 'fight@fakemail.com', 'UniVer');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('Gets the ROLE', () => {
    const intern = new Intern('New Challenger', 3, 'fight@fakemail.com.com', 'UniVer');

    expect(intern.getRole()).toEqual('Intern');
});