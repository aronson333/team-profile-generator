const header = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <script src="https://kit.fontawesome.com/20b7bd973d.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <title>Team Page</title>
  </head>
  
  <body>
      <div class="jumbotron jumbotron-fluid text-center bg-dark">
          <div class="container">
              <h1 class="display-4 text-light">My Team</h1>
              <h1 class="display-4 text-light"><i class="fas fa-users"></i></h1>
          </div>
      </div>
      <!-- Start of Cards -->
      <div class = "container">
          <div class="col-md-12">
              <div class="row">
`
/*================================================================================================================================*/

var generateManager = function (manager) {
  return `<div class="card m-2">
  <div class="card-header">
      <h1>${manager.getName()}</h1>
      <hr>
      <h2><i class="fas fa-briefcase"></i> Manager</h2>
  </div>
  <div class= "card-body">
          <div class="list-group">
              <p class="list-group-item list-group-item-action list-group-item-dark">ID: <span>${manager.getId()}</span></p>
              <p class="list-group-item list-group-item-action list-group-item-dark">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
              <p class="list-group-item list-group-item-action list-group-item-dark">Office Number: <span>${manager.getOfficeNumber()}</span></p>
          </div>
  </div>
</div>
<!---===============END OF MANAGER CODE BLOCK====================-->`
};
/*================================================================================================================================*/

const generateEngineer = function (engineer) {
  return ` <div class="card m-2">
  <div class="card-header">
      <h1>${engineer.getName()}</h1>
      <hr>
      <h2><i class="fas fa-screwdriver"></i> Engineer</h2>
  </div>
  <div class= "card-body">
          <div class="list-group">
              <p class="list-group-item list-group-item-action list-group-item-dark">ID: <span>${engineer.getId()}</span></p>
              <p class="list-group-item list-group-item-action list-group-item-dark">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
              <p class="list-group-item list-group-item-action list-group-item-dark">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></p>
          </div>
  </div>
</div>
<!---===============END OF ENGINEER CODE BLOCK====================-->`
};
/*================================================================================================================================*/

const generateIntern = function (intern) {
  return `<div class="card m-2">
  <div class="card-header">
      <h1>${intern.getName()}</h1>
      <hr>
      <h2><i class="fas fa-university"></i> Intern</h2>
  </div>
  <div class= "card-body">
          <div class="list-group">
              <p class="list-group-item list-group-item-action list-group-item-dark">ID: <span>${intern.getId()}</span></p>
              <p class="list-group-item list-group-item-action list-group-item-dark">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
              <p class="list-group-item list-group-item-action list-group-item-dark">School: <span>${intern.getSchool()}</span></p>
          </div>
  </div>
</div>
<!---===============END OF INTERN CODE BLOCK====================-->`
};
/*================================================================================================================================*/

const footer = `
        </div>
      </div>
    </div>  
  </body>
</html>`

function generateHtml(team) {
  const teamHtml = team.map(member => {
   if (member.getRole() === 'Engineer') {
    return generateEngineer(member)
   } else if (member.getRole() === 'Manager') {
    return generateManager(member)
   } else if (member.getRole() === 'Intern') {
    return generateIntern(member)
   }
  }).join('')
  return `${header}${teamHtml}${footer}`
}


module.exports = generateHtml