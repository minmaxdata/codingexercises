var moveZeros = function (arr) {
    // TODO: Program me
    // var arr2 = arr.filter((item) => item === 0)
    // var arr3 = arr.filter((item) => item !== 0)
    // return [...arr3, ...arr2];
    // for (var i = arr.length - 1; i >= 0; i--) {
    //     if (arr[i] === 0) {
    //         arr.splice(i, 1);
    //         arr.push(0);
    //     }
    // } // return arr;
    // return arr.reduceRight(function (prev, curr) {
    //     if (curr !== 0) {
    //         prev.unshift(curr);
    //     }
    //     else {
    //         prev.push(curr);
    //     }
    //     return prev;
    // }, []);
    // let result = arr.filter(c => c !== 0)
    // let count = arr.length - result.length

    // return result.concat(Array(count).fill(0))

    // for (var i in arr) {
    //     if (arr[i] === 0) {
    //         zeros.push(arr[i]);
    //     } else if (arr[i] !== 0) {
    //         result.push(arr[i]);
    //     }
    // }
    // return result.concat(zeros);
    return [
        ...(arr.filter(n => n !== 0)),
        ...(arr.filter(n => n === 0))
    ];
    // return arr.reverse().reduce(function (ret, v) {
    //     return v === 0 ? ret.push(v) : ret.unshift(v), ret;
    // }, []);
}
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
    //([1, 2, 1, 1, 3, 1, 0, 0, 0, 0])