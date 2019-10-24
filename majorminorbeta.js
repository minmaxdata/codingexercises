
//Karen McAdams kemcadams@gmail.com

function isGreater(string1, string2) {
    if (parseInt(string1) > parseInt(string2)) {
        return true;
    }
    return false;
}

// console.log(isGreater('5', '4'));

var newerThanVersion = function (v1, v2) {

    var str1 = v1.split('.');
    var str2 = v2.split('.');
    console.log(str1, str2)

    //evaluate build numbers
    if (str1.length > 2) {
        if (str1[0] > str2[0]) {
            return true;
        } else if (str1[1] > str2[1]) {
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