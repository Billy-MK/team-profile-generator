const Manager = require('../lib/Manager.js');

describe("Manager", () => {
    it("Gives the name of the Manager", () => {
        const testManagerName = new Manager('Jacob', 1, 'Jacob@gmail.com');
        expect(testManagerName.name).toEqual('Jacob');
    })
    it("Gives the ID of the Manager", () => {
        const testManagerId = new Manager('Jacob', 1, 'Jacob@gmail.com');
        expect(testManagerId.getId()).toEqual(1);
    })
    it("Gives the name of the Manager", () => {
        const testManagerEmail = new Manager('Jacob', 1, 'Jacob@gmail.com');
        expect(testManagerEmail.getEmail()).toEqual('Jacob@gmail.com');
    })
})