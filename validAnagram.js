var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const letterCount = {};
  for (let letter of s) {
    if (!letterCount[letter]) {
      letterCount[letter] = 0;
    }
    letterCount[letter]++
  }

  for (let letter of t) {
    if (!letterCount[letter]) {
      return false;
    } else if (letterCount[letter] < 1) {
      return false;
    }
    letterCount[letter]--;
  }
  return true;
};

let s = "anagram";
let t = "nagaram"
let result = isAnagram(s, t);
console.log(result)