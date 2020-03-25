/*
Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

Example:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine2 = function(n) {
  let results = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      results.push([i + 1, j + 1]);
    }
  }
  return results;
};

//console.log(combine2(5));

var combine = function(n, k) {
  let all_results = [];
  if (k === 0) {
    return all_results;
  }
  combinations(1, [], k, all_results, n);  
  return all_results;
};

var combinations = function(d, caseList, k, result, n) {
  if (caseList.length === k) {
    result.push(caseList);
  }
  if (caseList.length < k) {
    for (let i = d; i <= n; i++) {
      let list = [...caseList];
      list.push(i);
      combinations(i + 1, list, k, result, n);
    }
  }
};

console.log(combine(5, 2));
