const data = require('../data/zoo_data');

const isManager = () => {
  if (data.employees.filter((gerente) => gerente.managers)) {
    return 'sei la';
  }
  return 'é isso ai';
};
console.log(isManager('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'));
/* 
const getEmployeeByName = (employeeName); */

/* console.log(getEmployeeByName('Nigel')); */

module.exports = getEmployeeByName;
