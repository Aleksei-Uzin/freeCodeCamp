/**
 * Diff Two Arrays
 *
 * Compare two arrays and return a new array with any items
 * only found in one of the two given arrays, but not both.
 * In other words, return the symmetric difference of the two arrays
 *
 */

// A
function diffArray(arr1, arr2) {
  const newArr = [...arr1, ...arr2]

  return newArr.filter(val => !arr1.includes(val) || !arr2.includes(val))
}

// B
function diffArray(arr1, arr2) {
  const diff = (a, b) => a.filter(val => !b.includes(val))

  return [...diff(arr1, arr2), ...diff(arr2, arr1)]
}

// C
function diffArray(arr1, arr2) {
  const difference = new Set(arr1)

  arr2.forEach(val =>
    difference.has(val) ? difference.delete(val) : difference.add(val)
  )

  return Array.from(difference)
}

// D
function diffArray(arr1, arr2) {
  const len1 = arr1.length
  const len2 = arr2.length
  const newArr = []

  for (let i = 0; i < Math.max(len1, len2); i++) {
    const val1 = arr1[i]
    const val2 = arr2[i]

    if (typeof val2 !== 'undefined' && !arr1.includes(val2)) newArr.push(val2)
    if (typeof val1 !== 'undefined' && !arr2.includes(val1)) newArr.push(val1)
  }

  return newArr
}

console.log(diffArray([1, 0, 'calf', 3, 'piglet'], [7, 'filly']))
