/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = function (words) {
  const offset = 'a'.charCodeAt(0);
  const unique = {};
  const fullTable = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

  const getMorse = (char) => {
    let morse = fullTable[char.charCodeAt(0) - offset];
    return morse;
  }

  words.forEach(word => {
    word = word.split('').map(char => getMorse(char)).join('');
    unique[word] = true;
  });

  return Object.keys(unique).length;

};
/*
Example:
Input: words = ["gin", "zen", "gig", "msg"]
Output: 2
Explanation:
The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."

There are 2 different transformations, "--...-." and "--...--.".
*/
const words = ["gin", "zen", "gig", "msg"];
let result = uniqueMorseRepresentations(words);
console.log('results', result);