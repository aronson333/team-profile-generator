const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.school = school
  }

  getSchool() {
    return this.school
  }

  getRole() {
    return "Intern"
  }
}

module.exports = Intern