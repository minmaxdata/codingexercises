const x = { 'foo': 'bar' };
const y = { 'baz': x };
const z = y['baz']['foo'];
console.table(z);

function f(x) {
  x *= 2;
  return function (y) {
    y *= x;
    return function (z) {
      return z * y;
    }
  }
}
let g = f(3)(4)(5);
console.table(g);
let event = {
  financials: {
    baseCost: "$19.99"
  }
}
let eventPrice;
const assignEvent = ({ financials: { baseCost: price } }) => eventPrice = price;
console.table(assignEvent(event));
const b = (n) => {
  console.log(n)
  if (n <= 1) {
    return 1;
  } else {
    return n * b(n - 1)
  }
};

let h = b(5);
console.table(h);
const getItems = customer => (...orders) => {
  return orders.filter(order => order.customerId === customer.id)
    .map(order => order.items)
    .reduce((acc, cur) => [...acc, ...cur], []);
}
let customer = {
  id: 5
}
const order1 = { id: 1, customerId: 1, items: ['belt'] };
const order2 = { id: 2, customerId: 5, items: ['chain', 'deo'] };
const order3 = { id: 3, customerId: 5, items: ['grills'] };
const w = getItems(customer)(order1, order2, order3);
console.table(w);
