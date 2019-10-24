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
        range.push(i)
    }
    for (var i = 0; i < range.length; i++) {
        if (arr.indexOf(range[i]) == -1)
            missing = range[i];

    }
    if (missing === undefined) {
        missing = largest + 1;

    }
    return missing === undefined ? largest + 1 : missing;

}
console.log(solution([1, 3, 6, 4, 1, 2]))
console.log(solution([1, 2, 3]))
console.log(solution([-1, -3]))

// console.log(solution(arr))
