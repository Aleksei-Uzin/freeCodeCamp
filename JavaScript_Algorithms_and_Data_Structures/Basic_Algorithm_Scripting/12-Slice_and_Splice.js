/**
 * Slice and Splice
 *
 * You are given two arrays and an index.
 * Copy each element of the first array into the second array, in order.
 * Begin inserting elements at index n of the second array.
 * Return the resulting array. The input arrays should remain the same after the function runs
 *
 */

// A
function frankenSplice(arr1, arr2, n) {
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)]
}

// B
function frankenSplice(arr1, arr2, n) {
  const arr2Copy = arr2.slice()

  arr2Copy.splice(n, 0, ...arr1)

  return arr2Copy
}
