const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.officeNumber = officeNumber
  }

  getOfficeNumber() {
    return this.officeNumber
  }

  getRole() {
    return "Manager"
  }
}

module.exports = Manager