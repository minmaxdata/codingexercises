/**
 * @param {number[]} digits
 * @return {number[]}
 */
/*
var plusOne = function(digits) {
    let output = [];
    let carriedValue = 1;

    for (let i = digits.length - 1; i >= 0; i--) {
        const sum = digits[i] + carriedValue;
        carriedValue = 0;

        if (sum >= 10) {
            carriedValue = 1;
            output.unshift(sum % 10);
        } else {
            output.unshift(sum);
        }

        if (i === 0 && carriedValue > 0) {
            output.unshift(carriedValue);
        }
    }

    return output;
};
*/
/*
var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--) {
        ++digits[i];
        if(digits[i] < 10) {
            break;
        }
        digits[i] -= 10;
    }

    digits[0] == 0 && digits.unshift(1);
    return digits;
};
*/

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    }
    else {
      digits[i]++;
      return digits;
    }
  }
  return [1, ...digits];
};
/*
var plusOne = function (digits) {
  if (!digits || digits.length === 0) {
    return [];
  }
  let carry = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + carry + (i === digits.length - 1 ? 1 : 0);
    carry = parseInt(sum / 10);
    console.log(sum, carry, digits[i], sum % 10)
    digits[i] = sum % 10;
  }
  carry && digits.unshift(carry);
  return digits;
};
*/
let result = plusOne([1, 2, 3, 9]);
console.log(result);
/*
[1,2,3]
[4,3,2,1]
*/