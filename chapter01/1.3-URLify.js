/**
 * Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient
 * space at the end to hold the additional characters. and that you are given the "true" length of the string.
 *
 * EXAMPLE:
 * Input: "Mr John Smith    ", 13
 * Output: "Mr%20John%20Smith"
 *
 */

 const urlify = function(str, length) {
  if (str.length === 0) {
    return '';
  }

  let output = '';
  for (let i = 0; i < length; i++) {
    if (str[i] === ' ') {
      output += '%20';
    } else {
      output += str[i];
    }
  }
  return output;
 };

 console.log(urlify("Mr John Smith    ", 13) === "Mr%20John%20Smith"); // should be true