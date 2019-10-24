
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
