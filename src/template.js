const generateEmployeeCards = employeeArr => {
    return `
          ${employeeArr
            .filter(({ confirmAddEmployee }) => confirmAddEmployee)
            .map(({ name, id, email, officeNumber }) => {
              return `
                    <div class="card">
                        <h3>${name}</h3>
                        <h4>Manager</h4>
                    </div>
                    <div class="card-body">
                        <p class="id">ID: ${id}</p>
                        <p class="email">Email: <a href="mailto:${email}">${email}</a></p>
                        <p class="officeNumber">Office Number: ${officeNumber}</p>
                    </div>
            `;
            })}
          ${employeeArr
            .filter(({ confirmAddEmployee }) => !confirmAddEmployee)
            .map(({ name, id, email, github }) => {
              return `
                    <div class="card">
                        <h3>${name}</h3>
                        <h4>Engineer</h4>
                    </div>
                    <div class="card-body">
                        <p class="id">ID: ${id}</p>
                        <p class="email">Email: <a href="mailto:${email}">${email}</a></p>
                        <p class="github">: ${github}</p>
                    </div>
            `;
            })}
            ${employeeArr
                .filter(({ confirmAddEmployee }) => !confirmAddEmployee)
                .map(({ name, id, email, school }) => {
                  return `
                        <div class="card">
                            <h3>${name}</h3>
                            <h4>Intern</h4>
                        </div>
                        <div class="card-body">
                            <p class="id">ID: ${id}</p>
                            <p class="email">Email: <a href="mailto:${email}">${email}</a></p>
                            <p class="school">: ${school}</p>
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
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Generator</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
        <h1>My Team</h1>
        ${generateEmployeeCards(teamArr)}
        </header>
    </body>
    </html>
    `;
  };