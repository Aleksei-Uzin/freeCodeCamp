/**
 * Arguments Optional
 *
 * Create a function that sums two arguments together. If only one argument is provided,
 * then return a function that expects one argument and returns the sum.
 *
 * If either argument isn't a valid number, return undefined
 *
 */

function addTogether(...params) {
  const [n1, n2] = params

  if (typeof n1 === 'number') {
    if (typeof n2 === 'number') return n1 + n2
    if (params.length === 1) return n => addTogether(n1, n)
  }
}
