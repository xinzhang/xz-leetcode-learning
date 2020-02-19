var lengthOfLongestSubstring = function(s) {
  const len = s.length;
  if (len <= 1) {
    return len;
  }

  const indices = { [s[0]]: 0 };

  let max = 1;
  let head = 0;
  let i = 0;
  while (++i < len) {
    const last = indices[s[i]];
  }
};
