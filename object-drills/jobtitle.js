/* eslint-disable strict */
function PersonCreator(name, jobTitle) {
  return {name, jobTitle,};
}

const Dave = new PersonCreator('Dave', 'Manager');
const Roger = new PersonCreator('Roger', 'Manager');
const Mack = new PersonCreator('Mack', 'Manager');
const Peter = new PersonCreator('Peter', 'Manager');

const employees = [Dave, Roger, Mack, Peter];

for (let i =0; i < employees.length; i++) {
  console.log(employees[i]);
}

