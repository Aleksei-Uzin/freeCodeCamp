/**
 * Where do I Belong
 *
 * Return the lowest index at which a value (second argument)
 * should be inserted into an array (first argument) once it has been sorted.
 * The returned value should be a number.
 *
 */

// A
function getIndexToIns(arr, num) {
  return arr.filter(val => val < num).length
}

// B
function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num)
}

// C
function getIndexToIns(arr, num) {
  const index = arr.sort((a, b) => a - b).findIndex(val => num <= val)

  return index !== -1 ? index : arr.length
}

// D
function getIndexToIns(arr, num) {
  arr = arr.sort((a, b) => a - b)

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i
  }

  return arr.length
}
