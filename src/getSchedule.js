const data = require('../data/zoo_data');

const { species, employees } = data;

const verificaDias = (nome) => species
  .find((animal) => animal.name === nome).availability;

console.log(verificaDias('lions'));

const getSchedule = (scheduleTarget) => {
  if (!scheduleTarget) {
    return 'alguma coisa deve acontecer';
  }
  if (verificaDias()) {
    verificaDias(scheduleTarget);
  }
};

console.log(getSchedule('lions'));

module.exports = getSchedule;
