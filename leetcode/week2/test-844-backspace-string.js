/*
Given two strings S and T, return if they are equal when both are typed into empty text editors. 
# means a backspace character.

Input: S = "ab#c", T = "ad#c"
Output: true

Input: S = "ab##", T = "c#d#"
Output: true

Input: S = "a##c", T = "#a#c"
Output: true

Input: S = "a#c", T = "b"
Output: false

Follow up:
Can you solve it in O(N) time and O(1) space?
*/

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

const backspaceCompare_1 = function (S, T) {
    var backspaceValue = function (str) {
        let stack = [];
        for (s of str.split('')) {
            if (s !== '#') {
                stack.push(s);
            } else {
                if (stack.length > 0) {
                    //stack.splice(stack.length - 1, 1);
                    stack.pop();
                }
            }
        }
        return stack.join('');
    };
    return backspaceValue(S) === backspaceValue(T);
};

const backspaceCompare_2 = (S, T) => {
    const strip = (str) => {
        const stack = [];
        for (const char of str) {
            if (char === '#') {
                stack.length > 0 && stack.pop();
            } else {
                stack.push(char);
            }
        }
        return stack.join('');
    };

    return strip(S) === strip(T);
};

const backspaceCompare = (S, T) => {
    var removeEmpty = function (str) {
        let arr = str.split('');
        while (arr.includes('#')) {
            const idx = arr.indexOf('#');
            idx === 0 ? arr.splice(idx, 1) : arr.splice(idx - 1, 2);
        }
        return arr.join('');
    };

    return removeEmpty(S) === removeEmpty(T);
};

let S = 'ab#c',
    T = 'ad#c';

console.log(backspaceCompare(S, T));
