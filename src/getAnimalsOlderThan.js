const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => data.species
  .find((especie) => especie.name === animal).residents
  .map((idade) => idade.age)
  .every((elemento) => elemento >= age);

console.log(getAnimalsOlderThan('lions', 40));
module.exports = getAnimalsOlderThan;
