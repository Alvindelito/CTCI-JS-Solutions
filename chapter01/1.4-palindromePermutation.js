/**
 * Given a string, write a function to check if it is a permutation of a palindrome. A palindrome
 * is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement
 * of letters. The palindrome does not need to be limited to just dictionary words.
 * You can ignore casing and non-letter characters
 *
 * EXAMPLE:
 * input: Tact Coa
 * Output: True // permutations: 'taco cat', 'atco cta', etc.
 */

const palindromePermutation = function(str) {
  let newStr = str.split(' ').join('').toLowerCase();
  let countLetters = {};
  for (let letter of newStr) {
    if (countLetters[letter] === undefined) {
      countLetters[letter] = 1;
    } else {
      countLetters[letter]++;
    }
  }
  // should only have be 0 or 1 odd counted characters to be a palindrome
  let oddCounter = 0;

  for (let letter in countLetters) {
    if (countLetters[letter] % 2 !== 0) {
      if (oddCounter < 1) {
        oddCounter++;
      } else {
        return false;
      }
    }
  }
  return true;
};

console.log(palindromePermutation('Tact Coa') === true);
console.log(palindromePermutation('rAec a Cr') === true);