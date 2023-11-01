/**
 * Seek and Destroy
 *
 * You will be provided with an initial array as the first argument.
 * Remove all elements from the initial array that are of the same value as these arguments
 *
 */

function destroyer(arr, ...rest) {
  return arr.filter(val => !rest.includes(val))
}

// Should return [1, 1]
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
