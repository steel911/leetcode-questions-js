// Question:
// Reverse digits of an integer
// Example: x = 123, return 321
// Example: x = -123, return -321
// Note:
// The input is assumed to be a 32-bit signed integer.
// Your function should return 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */
let reverse = function(x) {
  if(x === 0)
    return x

  let sign = Math.sign(x)
  let num = Math.abs(x)

  let digits = num.toString().split('')
  let _digits = digits.reverse()

  let _num = Number.parseInt(_digits.join(''))

  if( _num > Math.pow(2, 31) - 1)
    return 0

  if(sign >= 0)
    return _num
  else
    return _num * -1
};
