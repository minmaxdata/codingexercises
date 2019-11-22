const sumNested = (array) => {
  if (array.length === 0) return 0;
  const [a, ...rest] = array;
  if (typeof a === 'number')
    return a + sumNested(rest);
  return sumNested(a) + sumNested(rest);
}

let result = sumNested([1, [2, [3, [4]]]]);
console.log(result);