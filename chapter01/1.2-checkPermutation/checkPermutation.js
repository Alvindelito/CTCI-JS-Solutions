// Given two strings, write a method to decide if one is a permutation of the other.

/**
 * input - two strings
 * output - boolean
 *
 */

const checkPermutation = function(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  return str1.split('').sort().join() === str2.split('').sort().join();
};

console.log(checkPermutation('asdf', 'fdsa') === true); // should equal true
console.log(checkPermutation('asdf', 'f3sa') === false); // should equal false
console.log(checkPermutation('asdf', 'f32sa') === false); // should equal false