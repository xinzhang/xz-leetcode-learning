/*
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
*/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    strs = strs.sort();
    let mapping = {};

    for (const str of strs) {
        var sorted = str.split('').sort().join('');
        if (mapping[sorted] === undefined) {
            mapping[sorted] = [str];
        } else {
            mapping[sorted].push(str);
        }
    }

    return Object.values(mapping);
};

const array1 = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(array1));
