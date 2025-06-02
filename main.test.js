// test first character capitalization
const {
  capitalizeFirstChar,
  reverseString,
  calculator,
  caesarCipherFunction,
  analyzeFunction,
} = require('./main');

// test first character capitalization
describe('capitalizeFirstChar', () => {
  test('Returns "Not a String" for non-string inputs', () => {
    // Test cases for the capitalizeFirstChar function
    expect(capitalizeFirstChar(2)).toBe('Not a String');
    expect(capitalizeFirstChar({})).toBe('Not a String');
    expect(capitalizeFirstChar([])).toBe('Not a String');
  });

  test('Returns "No Content" for empty strings', () => {
    // Test cases for the capitalizeFirstChar function
    expect(capitalizeFirstChar('')).toBe('No Content');
  });

  test('Capitalizes the first word correctly', () => {
    // Test cases for the capitalizeFirstChar function
    expect(capitalizeFirstChar('hello')).toBe('Hello');
    expect(capitalizeFirstChar('a')).toBe('A');
    expect(capitalizeFirstChar('1st')).toBe('1st');
    expect(capitalizeFirstChar('123')).toBe('123');
    expect(capitalizeFirstChar('a b c')).toBe('A b c');
    expect(capitalizeFirstChar(' abc')).toBe(' Abc');
  });
});

// test string reversal
describe('reverseString', () => {
  test('Returns "Not a String" for non-string inputs', () => {
    // Test cases for the reverseString function
    expect(reverseString(2)).toBe('Not a String');
    expect(reverseString({})).toBe('Not a String');
    expect(reverseString([])).toBe('Not a String');
  });

  test('Reverses string correctly', () => {
    // Test cases for the reverseString function
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('a')).toBe('a');
    expect(reverseString('123')).toBe('321');
    expect(reverseString('!@#')).toBe('#@!');
    expect(reverseString('abc def')).toBe('fed cba');
  });
});

// test calculator function
describe('calculator', () => {
  test('Returns "Not a Number" for non-number inputs', () => {
    // Test cases for the calculator function
    expect(calculator.add('a', 2)).toBe('Not a Number');
    expect(calculator.add(2, 'b')).toBe('Not a Number');
    expect(calculator.add({}, 2)).toBe('Not a Number');
    expect(calculator.add(2, [])).toBe('Not a Number');
  });

  test('Adds two numbers correctly', () => {
    // Test cases for the calculator function
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-1, 1)).toBe(0);
    expect(calculator.add(0, 0)).toBe(0);
    expect(calculator.add(100, 200)).toBe(300);
  });

  test('Returns "Not a Number" for non number inputs', () => {
    expect(calculator.subtract('a', 2)).toBe('Not a Number');
    expect(calculator.subtract(2, 'b')).toBe('Not a Number');
    expect(calculator.subtract({}, 2)).toBe('Not a Number');
  });

  test('Subtracts two numbers correctly', () => {
    // Test cases for the calculator function
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(0, 0)).toBe(0);
    expect(calculator.subtract(100, 50)).toBe(50);
    expect(calculator.subtract(-1, -1)).toBe(0);
  });

  test('Returns "Not a Number" for non number inputs', () => {
    expect(calculator.multiply('a', 2)).toBe('Not a Number');
    expect(calculator.multiply(2, 'b')).toBe('Not a Number');
    expect(calculator.multiply({}, 2)).toBe('Not a Number');
  });

  test('Multiplies two numbers correctly', () => {
    // Test cases for the calculator function
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(-1, 1)).toBe(-1);
    expect(calculator.multiply(0, 100)).toBe(0);
    expect(calculator.multiply(5, 5)).toBe(25);
  });

  test('Returns "Not a Number" for non number inputs', () => {
    expect(calculator.divide('a', 2)).toBe('Not a Number');
    expect(calculator.divide(2, 'b')).toBe('Not a Number');
    expect(calculator.divide({}, 2)).toBe('Not a Number');
  });

  test('Divide two numbers correctly', () => {
    expect(calculator.divide(6, 3)).toBe(2);
    expect(calculator.divide(10, 2)).toBe(5);
    expect(calculator.divide(0, 100)).toBe(0);
    expect(calculator.divide(5, 5)).toBe(1);
    expect(calculator.divide(1, 0)).toBe(Infinity); // Division by zero
    expect(calculator.divide(0, 0)).toBe(NaN); // 0 divided by 0
  });
});

// Caesar Cipher function
describe('caesarCipherFunction', () => {
  test('Returns "Not a String" for non-string inputs', () => {
    expect(caesarCipherFunction(123, 3)).toBe('Not a String');
    expect(caesarCipherFunction({}, 3)).toBe('Not a String');
    expect(caesarCipherFunction([], 3)).toBe('Not a String');
  });

  test('Returns "Not a Number" for non-number shift values', () => {
    expect(caesarCipherFunction('hello', 'three')).toBe('Not a Number');
    expect(caesarCipherFunction('hello', {})).toBe('Not a Number');
    expect(caesarCipherFunction('hello', [])).toBe('Not a Number');
  });

  test('Returns "Must Not Be an Empty String" for empty strings', () => {
    expect(caesarCipherFunction('', 3)).toBe('Must Not Be an Empty String');
  });

  test('Returns the correct Caesar cipher for valid inputs', () => {
    expect(caesarCipherFunction('abc', 1)).toBe('bcd');
    expect(caesarCipherFunction('xyz', 3)).toBe('abc');
    expect(caesarCipherFunction('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
    expect(caesarCipherFunction('123', 2)).toBe('123');
    expect(caesarCipherFunction('!@#', 4)).toBe('!@#');
    expect(caesarCipherFunction('abc', -1)).toBe('zab');
    expect(caesarCipherFunction('Hello', 52)).toBe('Hello');
    expect(caesarCipherFunction('Hello', -52)).toBe('Hello');
    expect(caesarCipherFunction('Hello', -52)).toBe('Hello');
  });
});

// analyzeFunction
describe('analyzeFunction', () => {
  test('Returns "Not an Array" for non-array inputs', () => {
    expect(analyzeFunction(123)).toBe('Not an Array');
    expect(analyzeFunction({})).toBe('Not an Array');
    expect(analyzeFunction('string')).toBe('Not an Array');
  });

  test('Returns "Array Must Not Be Empty" for empty arrays', () => {
    expect(analyzeFunction([])).toBe('Array Must Not be Empty');
  });

  test('Function Returns an Object with 4 properties', () => {
    expect(analyzeFunction([1, 2, 3])).toEqual({
      average: expect.any(Number),
      min: expect.any(Number),
      max: expect.any(Number),
      length: expect.any(Number),
    });
  });

  test('Returns the following properties average, min, max, length', () => {
    expect(analyzeFunction([1, 2, 3, 4, 5])).toEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    });

    expect(analyzeFunction([10, 20, 30, 40, 50])).toEqual({
      average: 30,
      min: 10,
      max: 50,
      length: 5,
    });

    expect(analyzeFunction([-1, -2, -3, -4, -5])).toEqual({
      average: -3,
      min: -5,
      max: -1,
      length: 5,
    });
  });
});
