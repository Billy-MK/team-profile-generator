const Intern = require('../lib/Intern.js');

describe("Intern", () => {
    it("Gives the name of the Intern", () => {
        const testInternName = new Intern('Andrea', 1, 'Andrea@gmail.com');
        expect(testInternName.name).toEqual('Andrea');
    })
    it("Gives the ID of the Intern", () => {
        const testInternId = new Intern('Andrea', 1, 'Andrea@gmail.com');
        expect(testInternId.getId()).toEqual(1);
    })
    it("Gives the name of the Intern", () => {
        const testInternEmail = new Intern('Andrea', 1, 'Andrea@gmail.com');
        expect(testInternEmail.getEmail()).toEqual('Andrea@gmail.com');
    })
})