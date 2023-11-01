/**
 * Wherefore art thou
 *
 * Make a function that looks through an array of objects (first argument) and
 * returns an array of all objects that have matching name and value pairs (second argument).
 * Each name and value pair of the source object has to be present in the object from the collection
 * if it is to be included in the returned array
 *
 */

// A
function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source)

  return collection.filter(item =>
    sourceKeys.every(key => item[key] === source[key])
  )
}

// B
function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source)

  return collection.filter(item => {
    for (let key of sourceKeys) {
      if (item[key] !== source[key]) return false
    }

    return true
  })
}

// C
function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source)

  return collection.filter(item => {
    let isEqual = true

    sourceKeys.forEach(key => {
      if (item[key] !== source[key]) isEqual = false
    })

    return isEqual
  })
}

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
)
