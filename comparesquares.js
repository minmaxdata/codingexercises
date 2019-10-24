function comp(array1, array2) {
    if ((array1 !== null && array2 !== null)) {
        var unique = (elem, index, array) => index === array.indexOf(elem);
        var ascending = (a, b) => a - b;
        var square = value => value * value;
        var issame = (value, index) => value === array2[index];

        array1.filter(unique);
        array2.filter(unique);

        if (array1.length === array2.length) {
            var a1 = array1.sort(ascending).map(square);
            array2.sort(ascending);
            return a1.every(issame);
        }
    }
    return false
}
a1 = [121, 144, 19, 161, 19, 144, 19, 11];
b2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]

console.log(comp(a1, b2))