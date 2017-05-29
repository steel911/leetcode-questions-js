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

    // Inital a 2-dimension Array representing Each Row
    for(let idx = 0; idx < numRows; idx++)
        chars[idx] = []

    let i = 0
    while( i < len) {
        // vertically down
        for(let idx = 0; idx < numRows && i < len; idx++)
            chars[idx].push(s.charAt(i++))
        // obliquely up,
        // numRows - 2 means start loop with the 2nd last row;
        // idx >= 1 means end up with the 2nd row, since row count begins with Zero;
        for(let idx = numRows - 2; idx >= 1 && i < len; idx--)
            chars[idx].push(s.charAt(i++))
    }

    // Concatenate Each Row back to Single Array
    for(let idx = 0; idx < numRows; idx++) {
        zigzag = zigzag.concat(chars[idx])
    }

    return zigzag.join('')
};
