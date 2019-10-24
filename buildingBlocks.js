
let nums = [1, 2, 3, 4, 5, 6];


// 1.
function cube(x) {
    return x * x * x;
}
function square(x) {
    return x ** 2;
}
// 2.
function fullname(first, last) {
    return first + " " + last;
}
// 3.
function power(base, exp) {
    if (exp === 0) {
        return 1;
    }
    return base * power(base, exp - 1);
}
// 4.
function sumCubes(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total = total + cube(numbers[i]);
    }
    return total;
}

function sumCubes(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total = total + cube(numbers[i]);
    }
    return total;
}
function each(array, func) {
    for (var i = 0; i < array.length; i++) {
        func(array[i]);
    }
}

function sumSquares(numbers) {
    var total = 0;
    each(numbers, function (num) {
        total += num * num;
    })
    return total;
}

console.log(sumSquares(nums));
function sumCubes(numbers) {
    var total = 0;
    each(numbers, function (num) {
        total += cube(num);
    })
    return total;
}
console.log(sumCubes(nums));
function productsums(arr) {
    let total = 1;
    for (let i = 0; i < arr.length; i++) {
        total *= arr[i];
    }
    return total;
}
console.log(productsums(nums));
function productsumsW(arr) {
    let total = 1;
    each(arr, function (num) {
        total *= num
    });
    return total;
}
console.log(productsumsW(nums));

function cubeAll(arr) {
    let total = [];
    for (let i = 0; i < arr.length; i++) {
        total.push(cube(arr[i]));
    }
    return total;
}
console.log(cubeAll(nums));
function cubeAllW(arr) {
    let total = [];
    each(arr, function (i) {
        total.push(cube(i));
    })
    return total;
}
console.log(cubeAllW(nums));
function odds(arr) {
    let odd = [];
    each(arr, function (i) {
        if (i % 2 !== 0) {
            odd.push(i);
        }
    })
    return odd;
}
console.log(odds(nums));
function sumByAllElementsMultipliedByFour(arr) {
    let sum = 1;
    each(arr, function (n) {
        sum += n * 4
    });
    return sum;
}
console.log(sumByAllElementsMultipliedByFour(nums));
var numbers = [1, 2, 3, 4];
function sumBy(arr, func) {
    var sum = 0;
    each(arr, function (n) {
        sum += func(n);
    });
    return sum;
}
console.log('squre: ', sumBy(numbers, square)); // => 30
//Note: you will have to create a function "square" that returns the square of an input number.
console.log('cube: ', sumBy(numbers, cube)); // => 100
//Note: you will have to create a function "cube" that returns the cube of an input number.
console.log('anon : ', sumBy(numbers, function (number) {
    return number * 4;
}));
console.log('sum array : ', sumBy(numbers, function (number) {
    return number += number;
}));

function doubleAll(numbers) {
    var sum = [];
    each(numbers, function (n) {
        sum.push(n + n)
    });
    return sum;
}
console.log(' double ', doubleAll([1, 3, 10, 4, 7])); // => [2, 6, 20, 8, 14]
function halveAll(numbers) {
    var sum = [];
    each(numbers, function (n) {
        sum.push(n / 2)
    });
    return sum;
}
console.log(' halve ', halveAll([1, 3, 10, 4, 7]));
// => [2, 6, 20, 8, 14]
function uppercaseAll(string) {
    var solution = [];
    each(string, function (str) {
        solution.push(str.toUpperCase())
    })
    return solution;
};
console.log('upper case ', uppercaseAll(['this', 'is', 'a', 'sentence']));
function map(array, func) {
    var solution = [];
    for (var i = 0; i < array.length; i++) {

        solution.push(func(array[i]));
    }
    return solution;
}
console.log('map:', map([1, 2, 3, 4], function (x) {
    return x * 2;
}));
// => [2, 4, 6, 8]