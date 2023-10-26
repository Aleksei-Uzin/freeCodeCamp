/**
 * Finders Keepers
 *
 * Create a function that looks through an array arr and
 * returns the first elementin it that passes a 'truth test'
 *
 */

// A
function findElement(arr, func) {
  return arr.find(func)
}

// B
function findElement(arr, func) {
  let res

  for (let val of arr) {
    if (func(val)) {
      res = val
      break
    }
  }

  return res
}

// C
function findElement(arr, func) {
  if (arr.length > 0 && !func(arr[0])) {
    return findElement(arr.slice(1), func)
  } else {
    return arr[0]
  }
}
