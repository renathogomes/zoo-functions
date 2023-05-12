const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (i) => {
  const idAnimal = data.employees.find((obj) => obj.id === i).responsibleFor[0];
  const animalEncontrado = data.species.find((specie) => specie.id === idAnimal);
  const { name, sex, age } = animalEncontrado.residents
    .reduce((acumulado, atual) => (acumulado.age < atual.age ? atual : acumulado),
      animalEncontrado.residents[0]);
  return [name, sex, age];
};

module.exports = getOldestFromFirstSpecies;

/* const arrayIds = data.employees.find((elemento) => elemento.id === id).responsibleFor;
const elementoSpecies = data.species.filter((elemento) => elemento.id);
 quero comparar o elemento atual e trazer o objeto se tiver a idade maior */
