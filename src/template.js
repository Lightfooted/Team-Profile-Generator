const generateManager = teamArr => {
      return `
        <div class="col-sm-6">
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header">${teamArr.name}</div>
                    <div class="card-body">
                    <h5 class="card-title">Manager</h5>
                    <p class="id">ID: ${teamArr.id}</p>
                    <p class="email">Email: ${teamArr.email}</p>
                    <p class="officeNumber">Office Number: ${teamArr.officeNumber}</p>
                </div>
            </div>
        </div>
    `;
}

const generateEmployeeCards = employeeArr => {
    return `
          ${employeeArr
            .filter(({ role }) => role === "Engineer")
            .map(({ name, id, email, github }) => {
              return `
                <div class="col-sm-6">
                    <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
                        <div class="card-header">${name}</div>
                            <div class="card-body">
                            <h5 class="card-title">Engineer</h5>
                            <p class="id">ID: ${id}</p>
                            <p class="email">Email: ${email}</p>
                            <p class="github">Github: ${github}</p>
                        </div>
                    </div>
                </div>
            `;
            })}
            ${employeeArr
                .filter(({ role }) => role === "Intern")
                .map(({ name, id, email, school }) => {
                  return `
                    <div class="col-sm-6">
                        <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                            <div class="card-header">${name}</div>
                                <div class="card-body">
                                <h5 class="card-title">Intern</h5>
                                <p class="id">ID: ${id}</p>
                                <p class="email">Email: ${email}</p>
                                <p class="school">School: ${school}</p>
                            </div>
                        </div>
                    </div>
                `;
                })}
      `;
};

module.exports = templateData => {

    const {teamArr} = templateData;

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <title>Team Generator</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
        <h1 class="text-center">My Team</h1>
        <div class="row">
        ${generateManager(templateData)}
        ${generateEmployeeCards(templateData.teamArr)}
        </header>
        </div>
    </body>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </html>
    `;
  };