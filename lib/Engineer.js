const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.github = github
  }

  getGithub() {
    return this.github
  }

  getRole() {
    return "Engineer"
  }
}

module.exports = Engineer