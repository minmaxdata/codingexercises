function extend(obj1, obj2) {
    // your code here
    /* START SOLUTION */
    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);

    key2.forEach(function (k) {
        if (key1.indexOf(k) === -1) {
            obj1[k] = obj2[k];
        }

    })
    return obj1;
}

// Object.assign(obj1, obj2);
// Object.assign(obj1, dupl);
// for (let i = 0, len = key2.length; i < len; i++) {
//   if (key1.indexOf(key2[i]) === -1) {
//     obj1[key2[i]] = obj2[key2[i]];
//   }
// }
// for(var key in obj2){
//     if(obj1[key] === undefined){
//       obj1[key] = obj2[key];
//     }
//   }
var obj1 = {
    a: 1,
    b: 2
};
var obj2 = {
    b: 4,
    c: 3
};
extend(obj1, obj2)
//console.log('1', obj1);
