const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const { species } = data;
  return species.find(() => {});
};

console.log(countAnimals({ species: 'penguins' }));

module.exports = countAnimals;
