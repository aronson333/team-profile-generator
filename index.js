const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const generateHtml = require("./lib/generateHtml.js");

var team = []

function initalize(){
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: `What is your manager's name?`
    },
    {
      type: "input",
      name: "id",
      message: `What is your manager's ID?`
    },
    {
      type: "input",
      name: "email",
      message: `What is your manager's email?`
    },
    {
      type: "input",
      name: "officeNumber",
      message: `What is your manager's office number?`
    }
  ])
}
function buildTeam(){
  inquirer.prompt([
    {
      type: "list",
      name: "role",
      message:"What type of team member would you like to add?",
      choices: ["Engineer","Intern","I don't want to add any more team members"]
    }
  ]).then((answer)=> {
    if (answer.role === "Engineer"){
      return inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: `What is your engineer's name?`
        },
        {
          type: "input",
          name: "id",
          message: `What is your engineer's ID?`
        },
        {
          type: "input",
          name: "email",
          message: `What is your engineer's email?`
        },
        {
          type: "input",
          name: "github",
          message: `What is your engineer's GitHub?`
        }
      ]).then((answers)=>{
        let engineer = new Engineer(answers.name, answers.id, answers.email,answers.github);
        team.push(engineer)
        buildTeam();
      })
    }
    else if (answer.role === "Intern"){
      return inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: `What is your intern's name?`
        },
        {
          type: "input",
          name: "id",
          message: `What is your intern's ID?`
        },
        {
          type: "input",
          name: "email",
          message: `What is your intern's email?`
        },
        {
          type: "input",
          name: "school",
          message: `What is your intern's school?`
        }
      ]).then((answers)=>{
        let intern = new Intern(answers.name, answers.id, answers.email,answers.school);
        team.push(intern)
        buildTeam();
      })
    } else {
      const html = generateHtml(team)
      fs.writeFileSync(path.join(__dirname, 'dist', 'Team.html'), html)
      console.log("Your team has been constructed!")
    }
  });
}


/* ==========================================================*/
//START OF APP SEQUENCE 
/* ==========================================================*/
initalize()
.then((answers)=>{
  const manager = new Manager(answers.name, answers.id, answers.email,answers.officeNumber);
  team.push(manager)
  buildTeam()
});

////////////////////////////////////////////////////////////////////////////////////////////