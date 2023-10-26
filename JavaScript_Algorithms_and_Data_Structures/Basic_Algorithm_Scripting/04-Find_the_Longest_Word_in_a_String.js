/**
 * Return the length of the longest word in the provided sentence
 *
 */

// A
function findLongestWordLength(str) {
  return str.split(' ').reduce((len, word) => Math.max(len, word.length), 0)
}

// B
function findLongestWordLength(str) {
  return Math.max(...str.split(' ').map(word => word.length))
}

// C
function findLongestWordLength(str) {
  const words = str.split(' ')

  if (words.length === 1) return words[0].length

  return Math.max(
    words[0].length,
    findLongestWordLength(words.slice(1).join(' '))
  )
}

// D
function findLongestWordLength(str) {
  const arr = str.split(' ')
  let maxLength = 0

  for (let word of arr) {
    const length = word.length

    if (length > maxLength) maxLength = length
  }

  return maxLength
}
