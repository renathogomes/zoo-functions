const data = require('../data/zoo_data');

const getSpecies = (pessoa) => data.species
  .filter((specie) => pessoa.responsibleFor.includes(specie.id));

const getEmployees = () => data.employees.map((pessoa) => ({
  id: pessoa.id,
  fullName: `${pessoa.firstName} ${pessoa.lastName}`,
  species: getSpecies(pessoa).map((specie) => specie.name),
  locations: getSpecies(pessoa).map((specie) => specie.location),
}));

const getId = (idx) => {
  const result = data.employees
    .filter((pessoa) => pessoa.id === idx)
    .map((achado) => ({
      id: achado.id,
      fullName: `${achado.firstName} ${achado.lastName}`,
      species: getSpecies(achado).map((specie) => specie.name),
      locations: getSpecies(achado).map((specie) => specie.location),
    }))
    .find((elemento) => elemento);
  if (!result) {
    throw new Error('Informações inválidas');
  }
  return result;
};

const getName = (name) => data.employees
  .filter((pessoaName) => pessoaName.firstName.includes(name))
  .map((nome) => ({
    id: nome.id,
    fullName: `${nome.firstName} ${nome.lastName}`,
    species: getSpecies(nome).map((specie) => specie.name),
    locations: getSpecies(nome).map((specie) => specie.location),
  }))
  .find((elemento) => elemento);

const getSobrenome = (name) => data.employees
  .filter((pessoaSobrenome) => pessoaSobrenome.lastName.includes(name))
  .map((sobrenome) => ({
    id: sobrenome.id,
    fullName: `${sobrenome.firstName} ${sobrenome.lastName}`,
    species: getSpecies(sobrenome).map((specie) => specie.name),
    locations: getSpecies(sobrenome).map((specie) => specie.location),
  }))
  .find((elemento) => elemento);

const verificaNome = (nomee) => {
  if (getName(nomee)) {
    return getName(nomee);
  }
  if (getSobrenome(nomee)) {
    return getSobrenome(nomee);
  }
  throw new Error('Informações inválidas');
};

const getEmployeesCoverage = (parametro) => {
  if (!parametro) {
    return getEmployees();
  }
  if (parametro.id) {
    return getId(parametro.id);
  }
  if (parametro.name) {
    return verificaNome(parametro.name);
  }
  return undefined;
};

module.exports = getEmployeesCoverage;
