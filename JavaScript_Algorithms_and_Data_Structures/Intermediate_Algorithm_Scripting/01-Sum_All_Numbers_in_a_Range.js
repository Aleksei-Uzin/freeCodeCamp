/**
 * Sum All Numbers in a Range
 *
 * We'll pass you an array of two numbers.
 * Return the sum of those two numbers plus the sum of all the numbers between them.
 * The lowest number will not always come first
 *
 */

// A
function sumAll(arr) {
  const [min, max] = [Math.min(...arr), Math.max(...arr)]
  let res = 0

  for (let i = min; i <= max; i++) {
    res += i
  }

  return res
}

// B
function sumAll(arr) {
  const [min, max] = arr.sort((a, b) => a - b)

  return min !== max ? min + sumAll([min + 1, max]) : min
}

// Should return 10
console.log(sumAll([1, 4]))
