/**
 * Find the Symmetric Difference
 * https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference
 *
 * https://youtu.be/PxffSUQRkG4?si=Wfy4bu99_x_BIQKx
 *
 */

// My solution
function sym(...args) {
  const res = []

  while (args.length > 0) {
    const set = [...new Set(args.shift())]

    for (let item of set) {
      const index = res.indexOf(item)

      if (index >= 0) delete res[index]
      else res.push(item)
    }
  }

  return res.filter(Boolean)
}

// A
const sym = (...args) => [...new Set(args.reduce(diff))]
const diff = (arr1, arr2) => [
  ...arr1.filter(e => !arr2.includes(e)),
  ...arr2.filter(e => !arr1.includes(e)),
]

// B
function sym(...args) {
  return args
    .reduce(getDiff, [])
    .filter((elem, index, arr) => index === arr.indexOf(elem))

  function getDiff(arr1, arr2) {
    const filterFunction = (arr1, arr2) =>
      arr1.filter(item => arr2.indexOf(item) === -1)

    return filterFunction(arr1, arr2).concat(filterFunction(arr2, arr1))
  }
}

// C
function sym(...args) {
  return args.reduce(symDiff)

  function symDiff(arrayOne, arrayTwo) {
    const result = []

    arrayOne.forEach(function (item) {
      if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item)
      }
    })

    arrayTwo.forEach(function (item) {
      if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item)
      }
    })

    return result
  }
}
