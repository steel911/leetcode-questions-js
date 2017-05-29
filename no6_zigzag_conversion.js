// A       I
// B     H J
// C   G   K
// D F     L
// E       M

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let chars = []
    let zigzag = []
    let len = s.length

    for(let idx = 0; idx < numRows; idx++)
        chars[idx] = []

    let i = 0
    while( i < len) {
        // vertically down
        for(let idx = 0; idx < numRows && i < len; idx++)
            chars[idx].push(s.charAt(i++))
        // obliquely up
        for(let idx = numRows - 2; idx >= 1 && i < len; idx--)
            chars[idx].push(s.charAt(i++))
    }

    for(let idx = 0; idx < numRows; idx++) {
        zigzag = zigzag.concat(chars[idx])
    }

    return zigzag.join('')
};
