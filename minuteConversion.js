var minuteConversion = function (time) {
  if (isNaN(time)) {
    return '';
  }
  var solution = '';

  if (time < 60) {
    return minute_output(time)
  }

  else {
    var hour = Math.floor(time / 60);

    var minute = time % 60;
    solution = hour_output(hour);
    solution += ' ' + minute_output(minute)
  }
  console.log(solution);
  return solution;
}

var minute_output = function (minute) {
  console.log(minute)

  if (minute === 0) {
    return '';
  }
  if (minute === 1) {
    return `1 minute`;
  }
  return `${minute} minutes`
}

var hour_output = function (hour) {
  console.log(hour)
  if (hour === 0) {
    return '';
  }
  if (hour === 1) {
    return `1 hour`;
  }
  return `${hour} hours`
}

console.log(minuteConversion(121))
console.log(minuteConversion(35))