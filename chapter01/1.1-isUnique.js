// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

/**
 * input: string
 * output: boolean
 * constraints: cannot use additional data structures
 */

const isUnique = function(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
};

// tests
console.log(isUnique('asdf') === true); // should equal true
console.log(isUnique('bob') === false); // should equal false