// function sayHello() {
//   console.log('Hello, World');
// }

// sayHello();
// click 'run'
//Karen McAdams
//kemcadams@gmail.com

function assert(expectedBehavior, descriptionOfCorrectBehavior) {
    if (!expectedBehavior) {
        console.log(descriptionOfCorrectBehavior);
    } else {
        console.log('test passed');
    }
}

var x = 12;
// assert(x === 12, "x should be equal to 12");

// console.log([1, 2, 3] === [1, 2, 3]);

function testArrayEquality(array1, array2) {
    if (array1.length !== array2.length) return false;
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}
var first = [1, 2, 3, 4, 5];
var second = [1, 2, 3, 4, 5];
var third = [1, 9, 2, 4, 6];
var fourth = [1, 2, 3, 4, 5, 6];
// assert(testArrayEquality(first, second) === true, 'it should return true when inputs are equivalent');
// assert(testArrayEquality(first, third) === false, 'it should return false when inputs are different');
// assert(testArrayEquality(first, fourth) === false, 'it should return false when inputs are different');

/* data set */
var factories = [
    {
        'factory name': 'c&h plush',
        'products': 'stuffed animals',
        'rating': 'B',
        'monthly capacity': 100000,
        'total current orders': 10000,
        'days to deliver': 20,
        'shipping port': ['yantian']
    },
    {
        'factory name': 'Fox Con',
        'products': 'electronics',
        'rating': 'A',
        'monthly capacity': 1000000,
        'total current orders': 1000000,
        'days to deliver': 10,
        'shipping port': ['yantian', 'shanghai', 'beijing']
    },
    {
        'factory name': 'SS clothing',
        'products': 'textiles',
        'rating': 'F',
        'monthly capacity': 10000,
        'total current orders': 0,
        'days to deliver': 30,
        'shipping port': ['yantian']
    }
];

/*
Specs:
- it should return an array
- the array should be made up of tuples (arrays with a length of 2)
- the array should have one tuple for each factory
- the first value of the tuple should be a string
- the second value of the tuple should be a number
*/
// EXAMPLE OUTPUT: [['factory name', monthlyCapacity], ['another factory name', otherMonthlyCapacity]]
function getFactoryCapacities(factories) {
    // your code here
    var capacities = [];
    for (var i in factories) {
        capacities.push([factories[i]["factory name"], factories[i]['monthly capacity']])
    }
    return capacities;
}

function assertReturnArray(expected, actualOutput, descriptionOfCorrectBehavior) {
    if (!Array.isArray(actualOutput)) console.log(descriptionOfCorrectBehavior);
    else
        console.log('test passed')
}
function assertShouldConsistofTuples(expected, actualOutput, descriptionOfCorrectBehavior) {
    if (actualOutput[0].length === expected) console.log('test passed');
    else
        console.log(descriptionOfCorrectBehavior)
}
function assertShouldOneTupleEachFactory(expected, actualOutput, descriptionOfCorrectBehavior) {
    if (actualOutput.length === expected) console.log('test passed');
    else
        console.log(descriptionOfCorrectBehavior)
}
function assertFirstValueIsString(expected, actual, descriptionOfCorrectBehavior) {
    if (typeof actual[0][0] === 'string') console.log('test passed');
    else
        console.log(descriptionOfCorrectBehavior)
}
function assertSecondValueisANumber(expected, actual, descript) {
    if (isNaN(actual[0][1])) console.log(descript)
    else console.log('test passed');
}
var expected = [["c&h plush", 100000], ["Fox Con", 1000000], ["SS clothing", 10000]]
assertReturnArray([], getFactoryCapacities(factories), 'it should return an array')
assertShouldConsistofTuples(2, getFactoryCapacities(factories), 'it should consist of tuples')
assertShouldOneTupleEachFactory(3, getFactoryCapacities(factories), 'it should have 1 tuple per factory');
assertFirstValueIsString('a', getFactoryCapacities(factories), 'value is a string')
assertSecondValueisANumber(5, getFactoryCapacities(factories), 'second value is a number')






