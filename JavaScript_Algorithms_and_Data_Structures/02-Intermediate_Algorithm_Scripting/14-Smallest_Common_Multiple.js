/**
 * Smallest Common Multiple
 *
 * Find the smallest common multiple of the provided parameters that can be evenly divided by both,
 * as well as by all sequential numbers in the range between these parameters.
 *
 * The range will be an array of two numbers that will not necessarily be in numerical order
 *
 */

function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b)
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min)
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
  const lcm = (a, b) => (a * b) / gcd(a, b)

  return range.reduce((multiple, curr) => lcm(multiple, curr))
}
