/**
 * Everything Be True
 *
 * Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
 * In other words, you are given an array collection of objects. The predicate pre will be an object property
 * and you need to return true if its value is truthy. Otherwise, return false
 *
 */

// A
function truthCheck(collection, pre) {
  return collection.every(item => item[pre])
}

// B
function truthCheck(collection, pre) {
  for (let item of collection) {
    if (!item[pre]) return false
  }

  return true
}
