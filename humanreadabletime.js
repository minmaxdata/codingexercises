/*
describe('examples', function () {
    it('should format correctly', function () {
        Test.assertEquals(humanReadable(0), '00:00:00', 'humanReadable(0)');
        Test.assertEquals(humanReadable(5), '00:00:05', 'humanReadable(5)');
        Test.assertEquals(humanReadable(60), '00:01:00', 'humanReadable(60)');
        Test.assertEquals(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
        Test.assertEquals(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
    });
});
let totalSeconds = 28565;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;

console.log("hours: " + hours);
console.log("minutes: " + minutes);
console.log("seconds: " + seconds);

// If you want strings with leading zeroes:
minutes = String(minutes).padStart(2, "0");
hours = String(hours).padStart(2, "0");
seconds = String(seconds).padStart(2, "0");
console.log(hours + ":" + minutes + ":" + seconds);

function humanReadable(seconds) {
  return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(v) {
    v = Math.floor(v).toString();
    return v.length == 1 ? '0' + v : v;
  }).join(':');
}
*/

function humanReadable(totalSeconds) {
    var secondsPH = 3600;
    var secondsPM = 60;
    // var result = new Date(seconds * 1000).toISOString().substr(11, 8);
    let hours = Math.floor(totalSeconds / secondsPH);
    totalSeconds %= secondsPH;
    let minutes = Math.floor(totalSeconds / secondsPM);
    let seconds = totalSeconds % secondsPM;

    console.log("hours: " + hours);
    console.log("minutes: " + minutes);
    console.log("seconds: " + seconds);

    // If you want strings with leading zeroes:
    minutes = String(minutes).padStart(2, "0");
    hours = String(hours).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    // console.log(hours + ":" + minutes + ":" + seconds);
    return hours + ":" + minutes + ":" + seconds
}
console.log(humanReadable(0));
console.log(humanReadable(5));
console.log(humanReadable(60));
console.log(humanReadable(86399));
console.log(humanReadable(359999));
