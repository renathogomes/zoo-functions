const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    const objetoV = {};
    data.species.forEach((elemento) => {
      objetoV[elemento.name] = elemento.residents.length;
    });
    return objetoV;
  }
  const especieSelecionada = animal.species;
  const objetoEspecie = data.species.find((nome) => nome.name === especieSelecionada);
  const { residents } = objetoEspecie;
  if (!animal.sex) {
    const quantidadeResidentes = residents.length;
    return quantidadeResidentes;
  }
  return residents.filter((el) => el.sex === 'female').length;
};

console.log(countAnimals());

module.exports = countAnimals;
