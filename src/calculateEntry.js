const data = require('../data/zoo_data');

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

const countEntrants = (parametr) => {
  // seu código aqui
  const objetoVazio = { child: 0, adult: 0, senior: 0 };
  parametr.forEach((elemento) => {
    if (elemento.age < 18) {
      objetoVazio.child += 1;
    }
    if (elemento.age >= 18 && elemento.age < 50) {
      objetoVazio.adult += 1;
    }
    if (elemento.age >= 50) {
      objetoVazio.senior += 1;
    }
  });
  return objetoVazio;
};

console.log(countEntrants(entrants));

const calculateEntry = (parametro) => {
  if (!parametro) {
    return 0;
  }
  const allChild = parametro.filter((elm) => elm.age < 18).length;
  const allAdult = parametro.filter((elm) => elm.age >= 18 && elm.age < 50).length;
  const allSenior = parametro.filter((elm) => elm.age >= 50).length;
  const { adult, senior, child } = data.prices;
  const totalChild = allChild * child;
  const totalAdult = allAdult * adult;
  const totalSenior = allSenior * senior;
  return totalAdult + totalChild + totalSenior;
};
console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
