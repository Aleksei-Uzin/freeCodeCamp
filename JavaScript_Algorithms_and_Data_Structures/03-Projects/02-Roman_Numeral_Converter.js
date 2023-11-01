/**
 * Roman Numeral Converter
 *
 * Convert the given number into a roman numeral.
 *
 * Roman numerals 	Arabic numerals
 *      M 	              1000
 *      CM 	              900
 *      D 	              500
 *      CD 	              400
 *      C 	              100
 *      XC 	              90
 *      L 	              50
 *      XL 	              40
 *      X 	              10
 *      IX 	              9
 *      V 	              5
 *      IV 	              4
 *      I 	              1
 *
 * All roman numerals answers should be provided in upper-case
 *
 */

function convertToRoman(num) {
  const numerals = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I',
  }

  const str = num.toString()
  const rank = str.length - 1

  let res = str.replace(/\d/g, (match, i) => {
    match = Number(match)

    if (rank - i === 3) return numerals[1000].repeat(match)
    else if (rank - i === 2) return getRomanNum(match, 100)
    else if (rank - i === 1) return getRomanNum(match, 10)
    else return getRomanNum(match)
  })

  return res

  function getRomanNum(match, n = 1) {
    if (match === 9 || match === 5 || match === 4) return numerals[match * n]
    else if (match > 5) return numerals[5 * n] + numerals[n].repeat(match - 5)
    else return numerals[n].repeat(match)
  }
}
