import operate from '../logic/operate';

describe('testing operate component', () => {
  test('testing addition operation', () => {
    // Arrange
    const numberOne = 10;
    const numberTwo = 15;
    const operation = '+';
    // Act
    const result = operate(numberOne, numberTwo, operation);
    // Assert
    expect(result).toBe('25');
  });
  test('testing substraction operation', () => {
    // Arrange
    const numberOne = 15;
    const numberTwo = 10;
    const operation = '-';
    // Act
    const result = operate(numberOne, numberTwo, operation);
    // Assert
    expect(result).toBe('5');
  });
  test('testing multiplication operation', () => {
    // Arrange
    const numberOne = 10;
    const numberTwo = 15;
    const operation = 'x';
    // Act
    const result = operate(numberOne, numberTwo, operation);
    // Assert
    expect(result).toBe('150');
  });
  test('testing division operation', () => {
    // Arrange
    const numberOne = 25;
    const numberTwo = 5;
    const operation = '÷';
    // Act
    const result = operate(numberOne, numberTwo, operation);
    // Assert
    expect(result).toBe('5');
  });
  test('testing modulus operation', () => {
    // Arrange
    const numberOne = 21;
    const numberTwo = 5;
    const operation = '%';
    // Act
    const result = operate(numberOne, numberTwo, operation);
    // Assert
    expect(result).toBe('1');
  });
});
