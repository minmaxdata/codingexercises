/*
function int[]/list grep(string haystack, string needle)
haystack = "aaabcdddbbddddabcdefghi" h
needle = "abc" n
[2,14]
*/
/*
const grep = (haystack, needle) => {
  if (haystack.length < needle.length) {
    return [];
  }

  let result = [];

  // a haystack a needle
  // true
  // next char in haystack
  // compare to next char in needle
  //
  for (let i = 0; i < haystack.length; i++) {
    let match = false;
    for (let j = 0; j < needle.length; j++) {
      if (needle[j] === haystack[i + j]) {
        match = true;
      } else {
        match = false;
      }
    }
    if (match) {
      result.push(i);
    }
  }

  return result;
}
*/
const grep = (haystack, needle) => {
  if (haystack.length < needle.length) {
    return [];
  }
  if (haystack === null || needle === null) {
    return;
  }
  let needleHash = hash(needle);
  let result = [];
  let haystackHash = hash(haystack.substring(0, needle.length));

  if (needleHash === haystackHash) {
    result.push(0);
  }
  for (let i = needle.length; i < haystack.length; i++) {
    console.log(i, haystackHash);
    haystackHash -= haystack.charCodeAt(i - needle.length);
    haystackHash = haystackHash / 256;
    haystackHash += haystack.charCodeAt(i) * Math.pow(256, needle.length - 1);
    if (haystackHash === needleHash) {
      result.push(i - (needle.length - 1));
    }
  }

  return result;
};

function hash(value) {
  if (value === null) {
    return;
  }
  let res = 0;
  for (let i = 0; i < value.length; i++) {
    res += value.charCodeAt(i) * Math.pow(256, i);
  }
  return res;
}
const haystack = "aaaabcbbbcccccddddabcbgtre";
const needle = "abc";
let result = grep(haystack, needle);
console.log(result);
console.log(hash("aa"));
