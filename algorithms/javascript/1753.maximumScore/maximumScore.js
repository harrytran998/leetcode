// Source : https://leetcode.com/problems/maximum-score-from-removing-stones/
// Author : acgotaku311
// Date   : 2021-02-07

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const maximumScore = function (a, b, c) {
  const calc = (a, b, c, point) => {
    [a, b, c] = [a, b, c].sort((a, b) => a - b)
    if (a === 0 && b === 0) {
      return point
    }
    if (a + b === c) {
      return c + point
    } else if (a + b < c) {
      return a + b + point
    } else {
      return Number.parseInt((a + b - c) / 2) + c + point
    }
  }
  return calc(a, b, c, 0)
}

export { maximumScore }
