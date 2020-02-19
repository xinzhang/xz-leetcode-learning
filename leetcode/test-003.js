var lengthOfLongestSubstring = function(s) {
  let result = "";
  if (s.length === 1) return s;
  for (let i = 0; i < s.length; i++) {
    let current = "";
    for (let j = i; j < s.length; j++) {
      if (current.includes(s[j])) {
        if (current.length >= result.length) {
          result = current;
        }
        break;
      }
      current += s[j];
    }
  }
  return result;
};

const samples = ["abcabcbb", "bbbbb", "pwwkew"]; // expect 'abc', 'b', 'wke'

//samples.forEach(item => console.log(lengthOfLongestSubstring(item)));

console.log(lengthOfLongestSubstring("a"));
