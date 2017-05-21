// Question:
// Determine whether an integer is a palindrome.
// Do this without extra space.

/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function(x) {
  if( x< 0 || (x !== 0 && x % 10 === 0))
    return false

  let num = x
  let rev = 0
  while( num > 0) {
    let remainer = num % 10
    rev = rev * 10 + remainer
    num = Math.floor(num / 10)
  }
  return (x === rev)
}
