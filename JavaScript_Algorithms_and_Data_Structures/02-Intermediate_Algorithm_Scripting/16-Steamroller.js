/**
 * Steamroller
 *
 * Flatten a nested array. You must account for varying levels of nesting.
 *
 * Your solution should not use the flat() or flatMap()
 *
 */

// A
function steamrollArray(arr) {
  const flat = [].concat(...arr)

  return flat.some(Array.isArray) ? steamrollArray(flat) : flat
}

// B
function steamrollArray(arr) {
  const res = []

  for (let item of arr) {
    if (Array.isArray(item)) res.push(...steamrollArray(item))
    else res.push(item)
  }

  return res
}

// C
function steamrollArray(arr, flatArr = []) {
  arr.forEach(item => {
    if (Array.isArray(item)) steamrollArray(item, flatArr)
    else flatArr.push(item)
  })

  return flatArr
}

// D
function steamrollArray(arr) {
  const res = []
  let currentIndex = 0

  while (currentIndex < arr.length) {
    const item = arr[currentIndex]

    if (Array.isArray(item)) {
      arr.splice(currentIndex, 1, ...item)
    } else {
      res.push(item)
      currentIndex++
    }
  }

  return res
}
