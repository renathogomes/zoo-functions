const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('verifica se o zoo esta fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('verifica se o zoo esta aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('verifica se o zoo esta fechado, nas quartas', () => {
    expect(getOpeningHours('Wednesday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('verifica se o dia é válido', () => {
    expect(getOpeningHours('Thu', '09:00-AM')).toBe('The day must be valid. Example: Monday');
  });
  it('verifica se o PM/AM é válido', () => {
    expect(getOpeningHours('Friday', '09:00-ZM')).toBe('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('verifica se a dezena da hora é válida', () => {
    expect(getOpeningHours('Saturday', 'C9:00-AM')).toBe('The hour should represent a number');
  });
  it('verifica se AM ou PM existem', () => {
    expect(getOpeningHours(!['AM', 'PM'])).toBe('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('verifica se os minutos são limitados de 0 a 59', () => {
    expect(getOpeningHours('Tuesday', '09:60-AM')).toBe('The minutes must be between 0 and 59');
  });
  it('verifica se as horas são limitadas de 0 a 12', () => {
    expect(getOpeningHours('Monday', '13:00-AM')).toBe('The hour must be between 0 and 12');
  });
});
