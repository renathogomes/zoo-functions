const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna uma quantidade de elefantes', () => {
    expect(handlerElephants('count', 'elephants')).toBe(4);
  });
  it('retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names', 'elephants')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge', 'elephants')).toBe(10.5);
  });
  it('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability', 'elephants')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity', 'elephants')).toBe(5);
  });
  it('retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location', 'elephants')).toBe('NW');
  });
  it('não passando parametro, deve retornar underfined', () => {
    expect(handlerElephants()).toBeUnderfined();
  });
});
