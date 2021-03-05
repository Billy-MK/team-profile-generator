const Employee = require('../lib/employee.js');

describe("Employee", () => {
    it("Gives the name of the employee", () => {
        const obj = new Employee('John', 1, 'John@gmail.com');
        expect(obj.name).toEqual('John');
    })
    it("Gives the ID of the employee", () => {
        const testEmployeeId = new Employee('John', 1, 'John@gmail.com');
        expect(testEmployeeId.getId()).toEqual(1);
    })
    it("Gives the name of the employee", () => {
        const testEmployeeEmail = new Employee('John', 1, 'John@gmail.com');
        expect(testEmployeeEmail.getEmail()).toEqual('John@gmail.com');
    })
})