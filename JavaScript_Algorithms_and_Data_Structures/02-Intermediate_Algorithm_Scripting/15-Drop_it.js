/**
 * Drop it
 *
 * Given the array arr, iterate through and remove each element starting from
 * the first element (the 0 index) until the function func returns true
 * when the iterated element is passed through it.
 *
 * Then return the rest of the array once the condition is satisfied,
 * otherwise, arr should be returned as an empty array
 *
 */

// A
function dropElements(arr, func) {
  const index = arr.findIndex(func)

  return arr.slice(index >= 0 ? index : arr.length)
}

// B
function dropElements(arr, func) {
  return arr.length > 0 && !func(arr[0])
    ? dropElements(arr.slice(1), func)
    : arr
}

// C
function dropElements(arr, func) {
  let index = null

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      index = i
      break
    }
  }

  return index !== null ? arr.slice(index) : []
}

// D
function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift()
  }

  return arr
}

// Should return
// [3, 4]
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3
  })
)
// [1, 0, 1]
console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1
  })
)
// [1, 2, 3]
console.log(
  dropElements([1, 2, 3], function (n) {
    return n > 0
  })
)
// []
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5
  })
)
