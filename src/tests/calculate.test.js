import calculate from '../logic/calculate';

describe('Testing calute function', () => {
  test('Testing if button is AC ', () => {
    // Arrange obj, buttonName
    const obj = {
      total: '20',
      next: '10',
      operation: '+',
    };
    const btnName = 'AC';
    // Act
    const result = calculate(obj, btnName);
    // Assert
    expect(result).toEqual({ total: null, next: null, operation: null });
  });
  test('Testing if input is number 0', () => {
    // Arrange obj, buttonName
    const obj = {
      total: null,
      next: '0',
      operation: '+',
    };
    const btnName = '0';
    // Act
    const result = calculate(obj, btnName);
    // Assert
    expect(result).toEqual({});
  });
  test('Testing if input is number betwen 1 - 9. in our case: 5', () => {
    // Arrange obj, buttonName
    const obj = {
      total: null,
      next: '10',
      operation: '+',
    };
    const btnName = '5';
    // Act
    const result = calculate(obj, btnName);
    // Assert
    expect(result).toEqual({ total: '15', next: null, operation: null }, '5');
  });
});
