/*
Given an integer array arr, count element x such that x + 1 is also in arr.
If there're duplicates in arr, count them seperately.

Input: arr = [1,2,3]
Output: 2

Input: arr = [1,1,3,3,5,5,7,7]
Output: 0

Input: arr = [1,3,2,3,5,0]
Output: 3

Input: arr = [1,1,2,2]
Output: 2
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
    let cnt = 0;
    for (n of arr) {
        if (arr.includes(n + 1)) cnt++;
    }
    return cnt;
};

var countElements2 = function (arr) {
    let cnt = 0;
    let mapping = {};
    for (n of arr) {
        mapping[n] = n;
    }
    for (n of arr) {
        if (mapping[n + 1] !== undefined) {
            cnt++;
        }
    }
    return cnt;
};

let arr1 = [1, 2, 3];
let arr2 = [1, 1, 3, 3, 5, 5, 7, 7];
let arr3 = [1, 3, 2, 3, 5, 0];
let arr4 = [1, 1, 2, 2];

console.log(countElements(arr1));
console.log(countElements(arr2));
console.log(countElements(arr3));
console.log(countElements(arr4));
