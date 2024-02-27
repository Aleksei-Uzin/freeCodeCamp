/**
 * Binary Search
 * https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-binary-search
 *
 */

function binarySearch(searchList, value) {
  const arrayPath = []
  let start = 0
  let end = searchList.length - 1

  while (start <= end) {
    const midd = Math.floor((start + end) / 2)
    const item = searchList[midd]
    arrayPath.push(item)

    if (item === value) break

    if (item < value) start = midd + 1
    else end = midd - 1
  }

  return arrayPath.includes(value) ? arrayPath : 'Value Not Found'
}
