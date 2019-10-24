/**
 * @param {string} S
 * @return {string}
 *
 * The rules of Goat Latin are as follows:

If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
For example, the word 'apple' becomes 'applema'.

If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
For example, the word "goat" becomes "oatgma".

Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
Return the final sentence representing the conversion from S to Goat Latin.
class Solution(object):
   return S.split(' ').map((val, index)=> {
     let a = 'a'
     if(val[0].match( /[aeiouAEIOU]/g)) {
       return val = `${val}ma${a.repeat(index + 1)}`
     } else {
       return val=`${val.substring(1)}${val[0]}ma${a.repeat(index + 1)}`
     }
   }).join(' ')
};
 */
var toGoatLatin = function (S) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let words = S.split(' ');
  let aaas = '';

  for (let i = 0; i < words.length; i++) {
    const [a, ...rest] = words[i];
    const word = words[i];
    aaas += 'a'
    if (vowels.includes(a.toLowerCase())) {
      words[i] = `${word}ma${aaas} `
    } else {
      words[i] = `${rest.join('')}${a}ma${aaas} `
    }
  }
  return words.join(' ');

};
let result = toGoatLatin('I speak Goat Latin');
console.log('return ', result);