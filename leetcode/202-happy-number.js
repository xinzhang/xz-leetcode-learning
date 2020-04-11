/*
Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/

const calNo = n => {
    let result = 0;
    let current = n;
    while (current > 10) {
        result += Math.pow(Math.floor(current / 10), 2);
        current = current % 10;
    }
    result += Math.pow(current, 2);
    return result;
};

const getNextNum = num =>
    num
        .toString()
        .split('')
        .map(n => parseInt(n, 10) ** 2)
        .reduce((acc, curr) => (acc += curr), 0);

console.log(calNo(19), getNextNum(19));
console.log(calNo(34), getNextNum(34));

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy_wrong = function(n) {
    let cnt = 0;
    let current = calNo(n);
    while (current !== 100 || current !== 1 || current !== 10) {
        console.log(current);
        current = calNo(current);
        cnt++;
        if (cnt > 50) {
            break;
        }
    }
    if (current === 100 || current === 10 || current === 1) {
        return true;
    } else {
        return false;
    }
};

var isHappy = (num, stack = []) => {
  const newNum = getNextNum(num);
  if (stack.includes(nnewNum)) return false;
  return newNum === 1 ? true: isHappy(newNum, [...stack, newNum]);
}