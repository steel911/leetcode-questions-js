// Question:
// Given a string s, find the longest palindromic substring in s.
// You may assume that the maximum length of s is 1000.

// Example:
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Example:
// Input: "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = function(s){
  let start = 0
  let end = 0
  let max = 0

  let len = s.length

  if(len < 2)
    return s

  for(let i = 0; i<len-1; i++) {
    extendPalindrome(s, i, i)
    if(s.charAt(i) === s.charAt(i+1))
      extendPalindrome(s, i, i+1)
  }
  // console.log('start: ' + start + '\n')
  // console.log('end: ' + end + '\n')
  // console.log('max: ' + max + '\n')
  return s.substring(start, end + 1)

  function extendPalindrome(s, l, r) {
    while(l >= 0 && r < len && s.charAt(l) === s.charAt(r)) {
      l--
      r++
    }

    if(max < r - l - 1) {
      start = l + 1
      end = r - 1
      max = r - l - 1
    }
  }

}
