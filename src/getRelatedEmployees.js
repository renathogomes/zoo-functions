const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((pessoa) => pessoa.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    const array = data.employees.filter((pessoa) => pessoa.managers);
    const segundaParte = array
      .map(({ managers, firstName, lastName }) => {
        if (managers.includes(managerId)) {
          return `${firstName} ${lastName}`;
        }
        return undefined;
      })
      .filter((nome) => nome !== undefined);
    return segundaParte;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
