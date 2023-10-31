/**
 * Sorted Union
 *
 * Write a function that takes two or more arrays and returns a new array
 * of unique valuesin the order of the original provided arrays.
 *
 * In other words, all values present from all arrays should be included in their original order,
 * but with no duplicates in the final array.
 *
 */

// A
function uniteUnique(...arr) {
  return [...new Set(arr.flat())]
}

// B
function uniteUnique(...params) {
  return params.flat().filter((item, i, arr) => arr.indexOf(item) === i)
}

// C
function uniteUnique(arr, ...rest) {
  const res = [...new Set(arr)]

  for (let item of rest) {
    item.forEach(val => {
      if (!res.includes(val)) res.push(val)
    })
  }

  return res
}
