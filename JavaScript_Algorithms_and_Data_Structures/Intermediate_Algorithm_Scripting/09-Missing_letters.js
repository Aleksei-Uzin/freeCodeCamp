/**
 * Missing letters
 *
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined
 *
 */

// A
function fearNotLetter(str) {
  const firstCode = str.charCodeAt(0)

  for (let i = 1; i < str.length; i++) {
    if (firstCode + i !== str.charCodeAt(i)) {
      return String.fromCharCode(str.charCodeAt(i) - 1)
    }
  }

  return
}

// B
function fearNotLetter(str) {
  let currentCode = str.charCodeAt(0)
  let res = undefined

  str.split('').forEach(val => {
    if (val.charCodeAt(0) === currentCode) {
      currentCode++
    } else {
      res = String.fromCharCode(currentCode)
    }
  })

  return res
}
