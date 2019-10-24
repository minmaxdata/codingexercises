// Enter your code here

var myArray = [];
myArray[0] = 'Karen McAdams';
myArray[1] = 'kkmcad';
myInfo = {
    fullName: cutName(myArray[0]),
    skype: myArray[1],
    github: 'minmaxdata'
};
function cutName(name) {
    return name.split(' ');
}
console.log(cutName(myArray[0]));