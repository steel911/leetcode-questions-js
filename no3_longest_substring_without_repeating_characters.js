// Question:
// Given a string, find the length of the longest substring without repeating characters.
// Examples:
// Given "abcabcbb", the answer is "abc", which the length is 3.
// Given "pwwkew", the answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function(s) {
  let len = s.length

  // important, A Set is able to store unique values of any type including a Char
  // and Set is a ES6 feature.
  let subStrSet = new Set()
  let result = 0
  let l = 0, r = 0
  while(l < len && r < len) {
    if(!subStrSet.has(s.charAt(r))) {
      subStrSet.add(s.charAt(r))
      r++
      result = Math.max(result, r - l)
    } else {
      subStrSet.delete(s.charAt(l))
      l++
    }
  }
  return result
}
