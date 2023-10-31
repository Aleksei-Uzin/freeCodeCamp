/**
 * Sum All Odd Fibonacci Numbers
 *
 * Given a positive integer "num", return the sum of all odd Fibonacci numbers
 * that are less than or equal to "num".
 *
 * The first two numbers in the Fibonacci sequence are 0 and 1.
 * Every additional number in the sequence is the sum of the two previous numbers.
 * The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8
 *
 */

function sumFibs(num) {
  let prev = 0
  let curr = 1
  let res = 0

  while (curr <= num) {
    if (curr % 2 === 1) res += curr

    curr += prev
    prev = curr - prev
  }

  return res
}
