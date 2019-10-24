function calculateTotalWithTax(subTotal) {
    return (subTotal * .0975) + subTotal;
}
//calculateTotalWithTax(250); //274.375
//calculateTotalWithTax(500); //548.75

function countBy(number) {
    var total = [];
    for (var i = 1; i <= 5; i++) {
        total.push(number * i);
    }
    return total;
}
// Calling your function should result in:

// countBy(5); // [5, 10, 15, 20, 25];
// countBy(10); // [10, 20, 30, 40, 50];
// countBy(1); // [1, 2, 3, 4, 5];
// countBy(4); // [4, 8, 12, 16, 20];

function getFirst5(inputArr) {
    if (inputArr.length >= 5) {
        return inputArr.slice(0, 5)
    }
    return inputArr;
}
// Calling your function should result in:

// getFirst5([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]); //[10, 20, 30, 40, 50];
// getFirst5(["a", "b", "c"]); //["a", "b", "c"];

function bankAccountChecker(bankingInfo, account) {
    return `You have $${bankingInfo[account]} in your ${account} account`
}
// Calling your function should result in:

var account001 = {
    checking: 1000000,
    savings: 2
};

var account002 = {
    business: 2000000,
    personal: -4
};

var account003 = {
    travel: 534,
    education: 1012
};

bankAccountChecker(account001, 'checking'); //"You have $1000000 in your checking account"
bankAccountChecker(account002, 'personal'); //"You have $-4 in your personal account"
bankAccountChecker(account003, 'travel'); //"You have $534 in your travel account"

function notificationDisplay(appObject) {

    return appObject.notifications > 99 ? '99+' : appObject.notifications + '';
}
// Calling your function should result in:

var appA = { name: "SwapChat", notifications: 4 }
var appB = { name: "Twiddler", notifications: 209 }
var appC = { name: "Messages", notifications: 99 }

// notificationDisplay(appA); //"4"
// notificationDisplay(appB); //"99+"
// notificationDisplay(appC); //"99"

function tripleAllNumbers(numbers) {
    var result = [];
    for (var i of numbers) {
        result.push(i * 3);
    }
    return result;
}
// Calling your function should result in:

// tripleAllNumbers([1, 3, 5, 7, 9]); //[3, 9, 15, 21, 27];
// tripleAllNumbers([10, 15, 20, 25]); //[30, 45, 60, 75];
function robotBarBouncer(name, age) {
    return age > 21 ? 'Welcome ' + name + '!' : 'Sorry, ' + name + ". We can't serve people under 21.";
}
// Calling your function should result in:

// robotBarBouncer("Mary", 22); //"Welcome, Mary!"
// robotBarBouncer("Richard", 20); //"Sorry, Richard. We can't serve people under 21."
function shareFavoriteDessert() {
    return {
        name: "Flan",
        countryOfOrigin: "Spain",
        delicious: true,
        amountEatenInMyLifetime: "not enough"
    }
}
// Your function could output something like this:

// {
//   name: "Flan",
//   countryOfOrigin: "Spain",
//   delicious: true,
//   amountEatenInMyLifetime: "not enough"
// }
shareFavoriteDessert();

function inchesConverter(inches) {
    if (inches > 12) {
        var quotient = Math.floor(inches / 12);
        var remainder = inches % 12;
        return quotient + ' feet ' + remainder + ' inches'
    }
    return '0 feet ' + inches + ' inches';

}
// Calling your function should result in:

// inchesConverter(64); // "5 feet 4 inches"
// inchesConverter(102); // "8 feet 6 inches"
// inchesConverter(9); // "0 feet 9 inches"
function displayOptions(displayDevice) {
    var properties = Object.keys(displayDevice);
    var result = [];
    for (var i in properties) {
        if (displayDevice[properties[i]]) {
            result.push(properties[i]);
        }
    }
    return result;
}
// Calling your function should result in:

var televisionA = {
    VGA: false,
    HDMI1: true,
    HDMI2: true
}
var monitor001 = {
    VGA: true,
    DVI: false,
    HDMI1: true,
    HDMI2: true
}
var monitor002 = {
    HDMI1: true,
    HDMI2: true,
    DVI: true
}

// displayOptions(televisionA); //["HDMI1", "HDMI2"];
// displayOptions(monitor001); //["VGA", "HDMI1", "HDMI2"];
// displayOptions(monitor002); //["HDMI1", "HDMI2", "DVI"];

function inchesConverterExtended(inches) {
    if (inches > 12) {
        var quotient = Math.floor(inches / 12);
        var remainder = inches % 12;
        return quotient + '\' ' + remainder + '\"'
    }
    return inches + "\"";
}
// Calling your function should result in:

inchesConverterExtended(64); // "5' 4""
// inchesConverterExtended(102); // "8' 6""
// inchesConverterExtended(9); // "9""

function whoWillBeAtLeast30(people) {
    var thirty = [];
    for (var i of people) {
        if (i.birthday.year <= 1988) {
            thirty.push(i.name)
        }
    }
    return thirty;
}
// Calling your function should result in:

var people = [
    { name: 'Sarah', birthday: { month: 'June', day: 10, year: 1980 } },
    { name: 'Alex', birthday: { month: 'August', day: 21, year: 1984 } },
    { name: 'Chris', birthday: { month: 'December', day: 20, year: 1983 } },
    { name: 'Kira', birthday: { month: 'October', day: 30, year: 1988 } },
    { name: 'Ana', birthday: { month: 'Jan', day: 11, year: 1990 } }
];

// whoWillBeAtLeast30(people); // ['Sarah', 'Alex', 'Chris', 'Kira'];

function indexOfLargest(numbers) {
    var sortedNums = numbers.sort((a, b) => a - b);
    // console.log(sortedNums);
    var largest = numbers[0];
    var index = 0;

    for (var i = 1; i < numbers.length; i++) {
        if (largest < numbers[i]) {
            largest = numbers[i];
            index = i;
        }
    }
    return index;
}
// Calling your function should result in:

// indexOfLargest([1, 5, 9, 7, 10, 2]); // 4
// indexOfLargest([2, 4, 11, 3, 1, 20]); // 5
// indexOfLargest([30, 1, 4, 2, 30, 0]); // 0
// indexOfLargest([6, 5, 5]); // 0
// indexOfLargest([1,2]); // 1

function largerThan1000(money) {
    let cash = money.replace(/\D/g, '');
    if (cash > 1000) {
        return true;
    }
    return false;
}
// Calling your function should result in:

// largerThan1000("$4050"); //true
// largerThan1000("$10,000"); //true
// largerThan1000("$400"); //false
var identity = function (value) {
    return value;
}

identity("hello world"); //"hello world"
identity(500); //500

var coffeeLover = function (bool) {
    return bool ? 'Enjoy a cup for free!' : 'Take a look at our other drinks';
}
// coffeeLover(true); //"Enjoy a cup for free!"
// coffeeLover(false); //"Take a look at our other drinks!"

var coffeeLoverExtended = function (obj) {
    return coffeeLover(obj.enjoysCoffee);
}
var customer001 = {
    name: "John Riley",
    ticketNumber: "A01",
    enjoysCoffee: true
};

//likewise..

var customer002 = {
    name: "Harold Crane",
    ticketNumber: "A02",
    enjoysCoffee: false
};
// coffeeLoverExtended(customer001); //"Enjoy a cup for free!"
// coffeeLoverExtended(customer002); //"Take a look at our other drinks!"

function convertToKilometers(miles) {
    return miles * 1.60934;
}

// convertToKilometers(50); //80.467
// convertToKilometers(361); //580.973
// If the number is between 0-0.65, return "Horrible freethrow shooter"
// If the number is between 0.65-0.80 return "Decent freethrow shooter"
// If the number is between 0.80-1.00 return "Great freethrow shooter"

var isGoodFreethrowShooter = function (value) {
    if (value >= 0.80 && value <= 1) {
        return "Great freethrow shooter"
    }
    if (value >= .65 && value < .80) {
        return "Decent freethrow shooter"
    }
    if (value >= 0 && value < .65) {
        return "Horrible freethrow shooter"
    }

}
// isGoodFreethrowShooter(0.90); //"Great freethrow shooter"
// isGoodFreethrowShooter(0.09); //"Horrible freethrow shooter"
// isGoodFreethrowShooter(0.75); //"Decent freethrow shooter"
var dogsIWouldPet = function (string) {
    var nodogs = 'I do not like dogs';
    if (string === nodogs) {
        return ' I would not pet dogs'
    }
    return `I would pet dogs no bigger than an ${string}`
}
// dogsIWouldPet("ottoman"); //"I would pet dogs no bigger than an ottoman"
// dogsIWouldPet("small horse"); //"I would pet dogs no bigger than an small horse"
// dogsIWouldPet("Terrier"); //"I would pet dogs no bigger than an Terrier"
// dogsIWouldPet("I do not like dogs")
var isTallEnough = function (inches) {
    return (inches >= 48)
}
// isTallEnough(72); //true
// isTallEnough(28); //false
var favoriteDessert = function () {
    return { name: "Gelato", countryOfOrigin: "Italy", flavor: "Chocolate Chip", ovenTemp: 350, prepTime: "25 minutes + 50 minutes chilling" }
}
// favoriteDessert()
var countNumOfStrings = function (array) {
    var count = 0;
    for (var i of array) {
        if (typeof i === 'string') {
            count++
        }
    }
    return count;
}
// countNumOfStrings(["hello", "world", 5, true, {}]); //2
// countNumOfStrings(["foo", 2, 10, "bar", 5, false, {}, "baz"]); //3
// countNumOfStrings(["There is only one string in this example"]); //1
var listLengthOfAllWords = function (array) {
    var solution = [];
    for (var i of array) {
        solution.push(i.length)
    }
    return solution;
}
// listLengthOfAllWords(['hello', 'world', 'I', 'can', 'code']); //[5, 5, 1, 3, 4];

var tallEnoughToRide = function (obj) {
    var solution = [];
    for (var i of obj) {
        if (i.heightInInches >= 48) {
            solution.push(i.name)
        }
    }
    return solution

}
var groupA = [
    {
        name: "Mia",
        age: 10,
        heightInInches: 52
    },
    {
        name: "Jaya",
        age: 9,
        heightInInches: 45
    },
    {
        name: "Kiana",
        age: 10,
        heightInInches: 55
    },
    {
        name: "Alex",
        age: 11,
        heightInInches: 48
    }
]
// tallEnoughToRide(groupA); //["Mia", "Kiana", "Alex"];
var tallestPerson = function (obj) {
    var tallest = obj[0].heightInInches;
    var person = obj[0].name;
    for (var i of obj) {
        if (i.heightInInches > tallest) {
            tallest = i.heightInInches;
            name = i.name

        }
    }
    return `${name} at ${tallest} inches`;
}
// tallestPerson(groupA); //"Kiana at 55 inches"

var orderAVegetarianDish = function (obj) {
    for (var i of obj) {
        if (i.mealPreferences === 'vegetarian') {
            return true;
        }
    }
    return false;
}
var staffA = [
    {
        name: "Lia",
        department: "Human Resources",
        dietaryRestrictions: [],
        mealPreferences: "no preferences"
    },
    {
        name: "Sebastian",
        department: "Engineering",
        dietaryRestrictions: ["dairy free", "gluten free"],
        mealPreferences: "vegetarian"
    },
    {
        name: "Ari",
        department: "Executive",
        dietaryRestrictions: ["dairy free"],
        mealPreferences: "vegetarian"
    },
    {
        name: "Martha",
        department: "Legal",
        dietaryRestrictions: ["nut allergies"],
        mealPreferences: "non-vegetarian"
    }
];

// orderAVegetarianDish(staffA); //true

var shoppingSummary = function (array) {
    var total = array[0].price;
    var itemsCount = 1;

    for (var i = 1; i < array.length - 1; i++) {
        if (total < 100 && total + array[i].price < 100) {
            total += array[i].price;
            itemsCount++;
        }
    }
    return ` I got ${itemsCount} at ${total.toFixed(2)}`
}
var shoppingList = [
    {
        item: "rice",
        price: 12.75,
        weightInPounds: 20
    },
    {
        item: "chicken",
        price: 6.99,
        weightInPounds: 1.25
    },
    {
        item: "cookware",
        price: 79.99,
        weightInPounds: 35
    },
    {
        item: "celery",
        price: 3.99,
        weightInPounds: 2
    },
    {
        item: "carrots",
        price: 2.85,
        weightInPounds: 2
    },
    {
        item: "green beans",
        price: 2.55,
        weightInPounds: 2
    }
];
// shoppingSummary(shoppingList); //"I got 3 items at $99.73"
var removeMostExpensive = function (array) {
    var mostExpensive = 0;
    var solution = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].price < mostExpensive) {
            mostExpensive = array[i].price
            solution.push(array[i]);
        } else {
            mostExpensive = array[i].price;
        }
    }
    return solution;
}
var shoppingList =
    [
        {
            item: "chicken",
            price: 6.99,
            weightInPounds: 1.25
        },
        {
            item: "celery",
            price: 3.99,
            weightInPounds: 2
        },
        {
            item: "carrots",
            price: 2.85,
            weightInPounds: 2
        },
        {
            item: "green beans",
            price: 2.55,
            weightInPounds: 2
        },
        {
            item: "rice",
            price: 12.75,
            weightInPounds: 20
        }

    ];
removeMostExpensive(shoppingList);
//https://codestitch.io/d6985910
//Karen McAdams kemcadams@gmail.com

function isGreater(string1, string2) {
    if (parseInt(string1) > parseInt(string2)) {
        return true;
    }
    return false;
}

// console.log(isGreater('5', '4'));

var newerThanVersion = function (v1, v2) {

    if (parseFloat(v1) > parseFloat(v2)) {
        return true;
    }
    var str1 = v1.split('.');
    var str2 = v2.split('.');

    //evaluate build numbers
    if (str1.length > 2) {
        if (str1[0] > str1[0]) {
            return true
        } else if (str1[1] > str1[1]) {
            return true;
        } else if (str1[2] > str2[2]) {
            return true;
        }
    }


    return false;
}

function assert(expectedBehavior, descriptionOfCorrectBehavior) {
    if (!expectedBehavior) {
        console.log(descriptionOfCorrectBehavior);
    } else {
        console.log('test passed');
    }
}

// newerThanVersion should be able to handle version strings 
// that contain a major version, minor version, and build version.

// assert(newerThanVersion("5.1", "5.0") === true, "Should return true; 5.1 is newer than 5.0");
// assert(newerThanVersion("3.1", "5.0") === false, "Should return false; 3.1 is not newer than 5.0");
// assert(newerThanVersion("1", "2") === false, "Should return false; 2 is newer than 1");
// assert(newerThanVersion("5.1", "4.8") === true, "Should return true; 5.1 is newer than 4.8");
// assert(newerThanVersion("5.1.8", "5.1.7") === true, "Should return true; 5.1.8 is newer than 5.1.7");
// assert(newerThanVersion("5.1.8", "5.1.8") === false, "Should return false; 5.1.8 is the same as 5.1.8");
// assert(newerThanVersion("10.1", "9.8") === true, "Should return true; 10.1 is newer than 9.8");
assert(newerThanVersion("2.10.2", "2.6.12") === true, "Should return true; 2.10.2 is newer than 2.6.12");
// Time Limit 45 minutes
// Write a function numToRoman that takes in a number and returns a string of Roman numerals equal in value to the number.
// https://en.wikipedia.org/wiki/Roman_numerals
// Use recursion for numToRoman:
//Example of recursion: A function that take a number 0 or greater and return the number in that position in the Fibonacci Sequence
// https://en.wikipedia.org/wiki/Fibonacci_number
function fibNumber(num) {
    //base case:
    if (num === 0 || num === 1) {
        return num;
    }
    //recursive case:
    return fibNumber(num - 2) + fibNumber(num - 1);
}

console.log(fibNumber(0)); //0
console.log(fibNumber(1)); //1
console.log(fibNumber(2)); //1
console.log(fibNumber(3)); //2
console.log(fibNumber(4)); //3
console.log(fibNumber(5)); //5
console.log(fibNumber(10)); //55
console.log(fibNumber(35)); //9227465
// console.log(fibNumber(100)); //very large




// I - 1
// V - 5
// X - 10
// L - 50
// C - 100
// D - 500
// M - 1000

var numToRoman = function (num) {

};

numToRoman(2018); //'MMXVIII'
numToRoman(1999); //'MCMXCIX'
numToRoman(4); //'IV'
numToRoman(33) //'XXXIII'

var isSquare = function (n) {
    return /^[0-9]+$/.test(Math.sqrt(n))
}
var isSquare = function (n) {
    var i = 2;
    if (n === 0 || n === 1) {
        return true;
    }
    while (i <= n / 2) {
        if (n % i === 0 && i * i === n) {
            return true;
        }
        i++;
    }
    return false;
}
// isSquare(-1)// false, //"-1: Negative numbers cannot be square numbers"
// isSquare(0)// true, "0 is a square number (0 * 0)");
// isSquare(3)// false, "3 is not a square number");
isSquare(4)// true, "4 is a square number (2 * 2)");
// isSquare(25)// true, "25 is a square number (5 * 5)");
// isSquare(26)// false, "26 is not a square number");
function duplicateEncode(word) {
    var sol = {};
    var string = '';
    for (var i of word) {
        if (sol[i.toLowerCase()] === undefined) {
            sol[i.toLowerCase()] = 1;
        } else {
            sol[i.toLowerCase()]++;
        }
    }
    for (var i of word) {
        string += sol[i.toLowerCase()] === 1 ? '(' : ')';
    }
    console.log(sol);
    return string;
}
// duplicateEncode("din");
// duplicateEncode("recede");
// duplicateEncode("Success");
// duplicateEncode("(( @");
duplicateEncode("JRR RRv@RRP)wR");



function hasItem(arr, item) {
    for (var i of arr) {
        if (i === item) {
            console.log('found it');
        }
    }
    return;
}
hasItem([1, 1, 1], 1);
/*
Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

*/
function findOdd(arr) {
    var odd = arr[0];
    var map = {}
    for (var i of arr) {
        if (map[i] === undefined) {
            map[i] = 1;
        } else {
            map[i]++;
        }
    }
    for (var i in map) {
        if (map[i] % 2 === 1) {
            odd = i;
        }
    }
    return odd;
}

function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}


function findOdd(A) {
    var trace = {};
    A.forEach(function (x) {
        if (trace[x]) delete trace[x];
        else trace[x] = true;
    });
    return parseInt(Object.keys(trace)[0]);
}
function findOdd(A) {
    for (var i = 0; i < A.length; i++) {
        //Query the number of times that this 'i' element appears
        //then verify if that number of times is odd. If it is true, then return
        //that 'i' element
        if ((A.filter(function (item) {
            return item == A[i];
        }
        )).length % 2 != 0) {
            return A[i];
        }
    }
    return 0;
}
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
// Cool one liner using ES6
const findOdd = A => A.filter(x => A.filter(v => x === v).length % 2 === 1).reduce(a => a);
function findOdd(arr) {
    var result, num = 0;

    arr = arr.sort();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            num++;
        } else {
            num++;
            if (num % 2 != 0) {
                result = arr[i];
                break;
            }
        }
    }
    return result;
}
// findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);//, 5);
// findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])//, -1);
// findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])//, 5);
// findOdd([10])//, 10);
// findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])//, 10);
// findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])//, 1);
/*
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/
function findOutlier(ints) {
    return ints.slice(0, 3).reduce((a, b) => b % 2 === 0 ? a : a + 1, 0) >= 2 ?
        ints.find(i => i % 2 === 0) : ints.find(i => i % 2 !== 0);
}
function findOutlier(int) {
    var even = int.filter(a => a % 2 == 0);
    var odd = int.filter(a => a % 2 !== 0);
    return even.length == 1 ? even[0] : odd[0];
}
function findOutlier(integers) {
    return integers.slice(0, 3).filter(even).length >= 2 ? integers.find(odd) : integers.find(even);
}
function even(num) {
    return (num % 2 == 0);
}
function odd(num) {
    return !even(num)
}
const findOutlier = (A) => {
    var even = 0;
    var odd = 0;
    for (var val of A) {
        if (val % 2 === 0) {
            var evenNum = val;
            even++
        } else {
            var oddNum = val;
            odd++;
        }

    }
    return even === 1 ? evenNum : oddNum;
}
// findOutlier([160, 3, 1719, 19, 11, 13, -21]);
// findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);
// findOutlier([1, 1, 0, 1, 1]);
// findOutlier([0, 1, 2])
//1
// findOutlier([1, 2, 3])
//2
// findOutlier([2, 6, 8, 10, 3])
//3
// findOutlier([0, 0, 3, 0, 0])
//3
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}
function sortArray(array) {
    var indexes = [];
    var values = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1) {
            indexes.push(i);
            values.push(array[i]);
        }
    }
    values.sort((a, b) => a - b);
    for (var i = 0; i < indexes.length; i++) {
        array[indexes[i]] = values[i];
    }
    return array;
}
sortArray([5, 3, 2, 8, 1, 4, 0])// == [1, 3, 2, 8, 5, 4]
function findUniq(array) {
    array.sort((a, b) => a - b);
    return array[0] !== array[1] ? array[0] : array.pop();
}
// findUniq([ 1, 1, 1, 2, 1, 1 ])// === 2
findUniq([0, 0, 0.55, 0, 0])// === 0.55
/*
function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}
*/
function isPangram(string) {
    return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
}
/*
function isPangram(string){
  const str = string.replace(/[^a-zA-Z]/gi,'').toLowerCase()
  const set = new Set([...str]);
  return set.size === 26;
}

function isPangram(str) {
    var s = str.toLowerCase();
    var letters = "zqxjkvbpygfwmucldrhsnioate";
    for (var i = 0; i < 26; i++)
        if (s.indexOf(letters.charAt(i)) == -1)
            return false;
    return true;
}

function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}

function isPangram(string){
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}

function isPangram(string) {
  var str = string.split(' ').join('').toLowerCase();
  //console.log(string.replace(/[^a-z]/gi, ''))
  if (str.length > 25) {
    var regex = RegExp('(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z).*');
    return regex.test(string);
  }
  return false;
}
*/
// isPangram('abcdefghijklmopqrstuvwxyz ')
// isPangram('aaaaaaaaaaaaaaaaaaaaaaaaaa')
// isPangram('A pangram is a sentence that contains every single letter of the alphabet at least once.')
isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ')
/*


This is a demo task.

Write a function:

    function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [1..100,000];
        each element of array A is an integer within the range [−1,000,000..1,000,000].
*/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var arr = A.filter(function (elem, index, array) {
        return index == array.indexOf(elem);
    }).sort((a, b) => a - b);
    //is missing value in array
    var missing;
    var range = [];
    var largest = arr[arr.length - 1];
    if (largest < 0) {
        return 1;
    }
    for (var i = arr[0]; i <= arr[arr.length - 1]; i++) {
        range.push(i);
    }
    for (var i = 0; i < range.length; i++) {
        if (arr.indexOf(range[i]) == -1)
            missing = range[i];

    }
    return missing === undefined ? largest + 1 : missing;

}
console.log(solution([1, 3, 6, 4, 1, 2]))
console.log(solution([1, 2, 3]))
console.log(solution([-1, -3]))

// console.log(solution(arr))

function findmissing(a) {
    var prev = a[0];
    var current = 0;
    if (a[a.length - 1] < 0) {
        return 1;
    }

    for (var i = 1; i < a.length; i++) {
        current = a[i];
        var diff = current - prev;
        if (diff > 1) {
            return prev + 1;
        }
        prev = current;
    }
    return 1;
}

// var A = [101, 103, 106, 104, 101, 102];
// var A = [1, 2, 3, 5, 6, 7];
var A = [-1, -3];
var arr = A.filter(function (elem, index, array) {
    return index == array.indexOf(elem);
}).sort((a, b) => a - b);

console.log(findmissing(arr));
