// capitalize first character of a word
function capitalizeFirstChar(string) {
  let modString = string;

  // Check if input is a string
  if (typeof modString !== 'string') {
    return 'Not a String';
  }

  modString = modString.trim();

  // if empty string then return
  if (modString.length === 0) {
    return 'No Content';
  }

  // capitalize first char and concat with the rest
  for (let i = 0; i < string.length; i++) {
    if (isLetter(string[i])) {
      // skips if not a letter
      const prefix = string.slice(0, i);
      // Check if all previous characters are NOT letters or digits
      if (/^[^a-zA-Z0-9]*$/.test(prefix)) {
        return prefix + string[i].toUpperCase() + string.slice(i + 1);
      } else {
        return string; // letter follows a digit or letter, don't modify
      }
    }
  }

  // If no letter is found, return the og string (Ex: "123")
  return string;
}

// helper function for checking if char is a letter
function isLetter(char) {
  return typeof char === 'string' && /^[a-zA-Z]$/.test(char);
}

///////////////////////////////////////////////////////////////////

// This function reverses a string
function reverseString(string) {
  if (typeof string !== 'string') {
    return 'Not a String';
  }

  // Split string into an array of chars, reverse the array and join it back
  return string.split('').reverse().join('');
}

const calculator = {
  add: (a, b) => {
    // Check both inputs are numbers
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Not a Number';
    }
    // Return the sum of a and b
    return a + b;
  },

  subtract: (a, b) => {
    // Check both inputs are numbers
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Not a Number';
    }
    // Return the difference of a and b
    return a - b;
  },

  multiply: (a, b) => {
    // Check both inputs are numbers
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Not a Number';
    }

    // Return the product of a and b
    return a * b;
  },

  divide: (a, b) => {
    // Check both inputs are numbers
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Not a Number';
    }

    // Return the quotient of a and b
    return a / b;
  },
};

// Caesar cipher function
function caesarCipherFunction(input, shift) {
  // Check if input is a string
  if (typeof input !== 'string') return 'Not a String';

  // Check if input is a number
  if (typeof shift !== 'number') return 'Not a Number';

  // Check if first input is empty
  if (input.trim().length === 0) return 'Must Not Be an Empty String';

  // cipher the string
  return input
    .split('')
    .map((char) => {
      const charCode = char.charCodeAt(0);

      // Uppercase letters
      if (charCode >= 65 && charCode <= 90) {
        return String.fromCharCode(
          ((charCode - 65 + (shift % 26) + 26) % 26) + 65 // shift % 26 ensures we wrap around the alphabet
        );
      }

      // Lowercase letters
      if (charCode >= 97 && charCode <= 122) {
        return String.fromCharCode(
          ((charCode - 97 + (shift % 26) + 26) % 26) + 97 // shift % 26 ensures we wrap around the alphabet
        );
      }

      // Non-alphabetic characters remain unchanged
      return char;
    })
    .join('');
}

module.exports = {
  capitalizeFirstChar,
  isLetter,
  reverseString,
  calculator,
  caesarCipherFunction,
};
