// Question:
// Implement atoi to convert a string to an integer.
// Hint: Carefully consider all possible input cases. If you want a challenge,
// please do not see below and ask yourself what are the possible input cases.
// Notes: It is intended for this problem to be specified
// vaguely (ie, no given input specs).
// You are responsible to gather all the input requirements up front.

// Requirement for atoi(ASIII to integer)
// The function first discards as many whitespace characters as necessary until
// the first non-whitespace character is found. Then, starting from this character,
// takes an optional initial plus or minus sign followed by as many numerical
// digits as possible, and interprets them as a numerical value.

// The string can contain additional characters after those that form the integral
//  number, which are ignored and have no effect on the behavior of this function.

// If the first sequence of non-whitespace characters in str is not a valid integral
//  number, or if no such sequence exists because either str is empty or it
//   contains only whitespace characters, no conversion is performed.

// If no valid conversion could be performed, a zero value is returned. If the
//  correct value is out of the range of representable values, INT_MAX (2147483647)
//  or INT_MIN (-2147483648) is returned.
/**
 * @param {string} str
 * @return {number}
*/
let myAtoi = function(str) {
  let ret = 0
  // 1. Empty String
  if(!str)
    return 0

  // 2. Trim whitespace before and after
  let s = str.trim()

  // remove all the whitespace won't be necessary
  // s = s.replace(/\s/g, '')

  let idx = 0, sign = 1, total = 0, len = str.length

  // Hardcoded max and min, a hard limit by question, not by JS itself.
  // For General JS, limited by Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER
  const MAX =  2147483647
  const MIN = -2147483648

  // 3. Handle signs

  if(s.charAt(idx) == '+' || s.charAt(idx) == '-') {
    sign = s.charAt(idx) == '+' ? 1 : -1
    idx++
  }

  // 4. Convert number and avoid overflow
  while(idx < len) {
    let digit = s.charAt(idx)
    if(digit < '0' || digit > '9')
      break

    total = total * 10 + parseInt(digit)

    // Check Overflow
    if(total > MAX) break

    idx++
  }

  ret = sign * total
  if(ret > MAX) return MAX
  if(ret < MIN) return MIN
}
