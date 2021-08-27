const Engineer = require('../lib/Engineer');

test('Creates Engineer Object', () => {
    const engineer = new Engineer('New Challenger', 3, 'fight@fakemail.com', 'KingSmash');

    expect(engineer.github).toEqual(expect.any(String));
});

test('Gets the Engineers GITHUB', () => {
    const engineer = new Engineer('New Challenger', 3, 'fight@fakemail.com', 'KingSmash');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
}); 

test('Gets the ROLE', () => {
    const engineer = new Engineer('New Challenger', 3, 'fight@fakemail.com', 'KingSmash');

    expect(engineer.getRole()).toEqual('Engineer');
})