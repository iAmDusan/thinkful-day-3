/* eslint-disable strict */
function PersonCreator(name, jobTitle, boss) {
    return {
        name, 
        jobTitle, 
        boss,
    };
  }
  

  function printMessage(employee) {
      if (!employee.boss) {
        return `Founder ${employee.name} doesn't report to anybody.`;
      }
      return `${employee.jobTitle} ${employee.name} reports to ${employee.boss}."`;
  }

  const Dave = new PersonCreator('Dave', 'Manager', 'Roger');
  const Roger = new PersonCreator('Roger', 'Manager', 'Mack');
  const Mack = new PersonCreator('Mack', 'Founder');
  const Peter = new PersonCreator('Peter', 'Manager', 'Dave');
  
  const employees = [Dave, Roger, Mack, Peter];
  

  console.log(printMessage(Dave));
  console.log(printMessage(Roger));
  console.log(printMessage(Mack));
  