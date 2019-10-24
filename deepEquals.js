// Using javascript create a function that will check if an object equals another object

const car1 = {
    color: 'red',
    doors: 2,
    make: 'Honda'
}

const car2 = {
    color: 'white',
    doors: 2,
    make: 'VW'
}

function deepEquals(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }

    // Code here
    var output = Object.keys(obj1).every((item, index) => item === Object.keys(obj2)[index]);
    if (output) {
        return Object.values(obj1).every((item, idx) => item === Object.values(obj2)[idx]);
    }
    return false;
}

//array1.length === array2.length && array1.every((value, index) => value === array2[index])

console.log(deepEquals(car1, car2));