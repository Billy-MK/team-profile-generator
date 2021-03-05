const Engineer = require('../lib/engineer.js');

describe("Engineer", () => {
    it("Gives the name of the engineer", () => {
        const testEngineerName = new Engineer('Elissa', 1, 'Elissa@gmail.com');
        expect(testEngineerName.name).toEqual('Elissa');
    })
    it("Gives the ID of the Engineer", () => {
        const testEngineerId = new Engineer('Elissa', 1, 'Elissa@gmail.com');
        expect(testEngineerId.getId()).toEqual(1);
    })
    it("Gives the name of the Engineer", () => {
        const testEngineerEmail = new Engineer('Elissa', 1, 'Elissa@gmail.com');
        expect(testEngineerEmail.getEmail()).toEqual('Elissa@gmail.com');
    })
})