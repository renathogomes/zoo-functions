const data = require('../data/zoo_data');

const getEmployeeByName = (parametro) => data.employees.reduce((acumulado, atual) => {
  if (atual.firstName === parametro || atual.lastName === parametro) {
    return atual;
  }
  return acumulado;
}, {});

console.log(getEmployeeByName());

module.exports = getEmployeeByName;

// buscar por pessoas colaboradoras através de seu primeiro ou último nome
// Retorne um objeto vazio caso a função não receba parâmetros
// Retorne as informações da pessoa colaboradora caso o parâmetro seja igual ao nome ou igual ao último nome
