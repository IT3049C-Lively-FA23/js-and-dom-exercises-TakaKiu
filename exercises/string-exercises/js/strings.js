
class StringFunctions {
  /**
   * @param {string} input
   * @returns {string}
   * @example
   * capitalize('hello world') // 'HELLO WORLD'
   * capitalize('hElLo wOrLd') // 'HELLO WORLD'
   */
  capitalize(input) {
    return input.toUpperCase();
  }

  /**
   * Returns a reversed string. Example: "abc" => "cba"
   * @param {string} input - the string input to be processed
   * @returns  {string} - the reversed string
   * @example
   * reverse('abc') // 'cba'
   */
  reverse(input) {
    return input.split('').reverse().join('');
  }

  /**
   * Returns an array of the words in a string
   * @param {string} input - the string input to be processed
   * @returns {string[]} - an array of words in the string
   * @example
   * words('hello world') // ['hello', 'world']
   */
  split(input) {
    return input.split(/\s+/);
  }
}

// Example usage:
const stringFunctions = new StringFunctions();
console.log(stringFunctions.capitalize('hello world')); // Output: HELLO WORLD
console.log(stringFunctions.reverse('abc')); // Output: cba
console.log(stringFunctions.split('hello world')); // Output: ['hello', 'world']

// Export the StringFunctions class to make it accessible in other modules
module.exports = StringFunctions;
