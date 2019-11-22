const bikes = ['bianchi', 'miele', 'miyata', 'benotto', 'panasonic'];

// Grab the first and last item of an array with Object destructuring
const { length, 0: first, [length - 1]: last } = bikes;
console.log(first, last, length); // bianchi, panasonic

// What?! How?! Array _are_ objects

// 1. You can use Object destructuring on an array, using the index as a property
const { 2: middle } = bikes;
console.log(middle); // miyata

{// this bracket is so I can get a new scope and re-use variable names, Nothing to do with what i am teaching here

  // 2. Arrays have a length property, which can be destructured along with indexes
  const { 0: first, length } = bikes;
  console.log(first, length); // bianchi, 5

}

{

  // 3. Destructuring allows us to use it's variables right inside
  // Computed property names allow us to reference the length and calculate the index of the last item
  const { length, 0: first, [length - 1]: last } = bikes;

}

{

  // We _can_ go bananas with this. Don't angry tweet me, I know this is a bit much
  const { length, [Math.floor(length / 2)]: middle } = bikes;
  console.log(middle); // miyata

}
// 4. Neat!