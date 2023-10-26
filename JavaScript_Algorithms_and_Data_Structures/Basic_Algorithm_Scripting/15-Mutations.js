/**
 * Mutations
 * Return true if the string in the first element of the array
 * contains all of the letters of the string in the second element of the array
 *
 */

function mutation(arr) {
  const [word1, word2] = arr.map(val => val.toLowerCase())

  return word2.split('').every(val => word1.includes(val))
}

function mutation(arr) {
  const [word1, word2] = arr.map(val => val.toLowerCase())

  for (let val of word2.split('')) {
    if (!word1.includes(val)) return false
  }

  return true
}
