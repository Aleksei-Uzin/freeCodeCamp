/**
 * Factorialize a Number
 *
 * Return the factorial of the provided integer
 *
 */

// A
function factorialize(num) {
  if (num === 0) return 1

  return factorialize(num - 1) * num
}

// B
function factorialize(num) {
  let res = 1

  while (num >= 1) {
    res *= num
    num--
  }

  return res
}
