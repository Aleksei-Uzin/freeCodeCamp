/**
 * Repeat a String Repeat a String
 *
 * Repeat a given string str (first argument) for num times (second argument).
 * Do not use the built-in .repeat() method
 *
 */

// A
function repeatStringNumTimes(str, num) {
  return num > 0 ? repeatStringNumTimes(str, num - 1) + str : ''
}

// B
function repeatStringNumTimes(str, num) {
  let res = ''

  for (let i = 0; i < num; i++) {
    res += str
  }

  return res
}
