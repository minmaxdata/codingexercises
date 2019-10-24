// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    var phone = '';
    var str = S.replace(/[^0-9]/g, '');
    var len = str.length;
    var sets = (len % 3) === 0 ? Math.floor(len / 3) : Math.floor(len / 3) + 1;
    var start = 0;
    var end = 3;

    for (var i = 0; i < sets; i++) {
        if ((len % 3) === 1 && i === sets - 2) {
            phone += str.substring(start, end - 1);
            start += 2;
            end += 2;
        } else {
            phone += str.substring(start, end);
            start += 3;
            end += 3;
        }

        if (i < sets - 1) {
            phone += '-';
        }
    }
    return phone;
}

console.log(solution('00-44  48 5555 8361'))//004-448-555-583-61
console.log(solution('0 - 22 1985--324'))//022-198-53-24;
console.log(solution('555372654'));//555-372-654
/*
function GetPhoneFormat(id) {
    var str = document.getElementById(id).value;
    if (str.length == 3) {
        var ind = str.substring(0, 3);
        document.getElementById(id).value = '(' + ind + ')';
    }
    if (str.length == 8) {
        var ind = str.substring(0, 8);
        document.getElementById(id).value = ind + '-';
    }
}
var C = A.replace(/[^0-9xX]/g, "");
C = C.replace(/[xX]/g, "x");
var B = "";
if (C.indexOf("x") > -1) {
    B = " " + C.substr(C.indexOf("x"));
    C = C.substr(0, C.indexOf("x"))
}
switch (C.length) {
    case (10): return C.replace(/(...)(...)(....)/g, "($1) $2-$3") + B;
    case (11): if (C.substr(0, 1) == "1") {
        return C.substr(1).replace(/(...)(...)(....)/g, "($1) $2-$3") + B
    }
        break;
    default:
}return A

*/