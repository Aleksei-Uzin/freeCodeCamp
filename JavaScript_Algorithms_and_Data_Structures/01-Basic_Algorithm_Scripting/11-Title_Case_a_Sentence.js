/**
 * Title Case a Sentence
 *
 * Return the provided string with the first letter of each word capitalized.
 * Make sure the rest of the word is in lower case.
 *
 */

// A
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, match => match.toUpperCase())
}

// B
function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.replace(/\w/, match => match.toUpperCase()))
    .join(' ')
}
