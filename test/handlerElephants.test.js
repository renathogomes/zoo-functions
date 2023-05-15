const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna uma quantidade de elefantes', () => {
    expect(handlerElephants('count', 'elephants')).toBe(4);
  });
});
