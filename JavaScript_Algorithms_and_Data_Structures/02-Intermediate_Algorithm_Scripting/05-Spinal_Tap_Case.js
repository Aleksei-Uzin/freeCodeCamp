/**
 * Spinal Tap Case
 *
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 *
 */

// A
function spinalCase(str) {
  return str
    .replace(/(?!^[A-Z])([A-Z])/g, ' $1')
    .replace(/[\W_]+/g, '-')
    .toLowerCase()
}

// B
function spinalCase(str) {
  // // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2')

  return str.replace(/\s+|_+/g, '-').toLowerCase()
}

// C
function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLowerCase()
}

// Should return
// this-is-spinal-tap
console.log(spinalCase('This Is Spinal Tap'))
// this-is-spinal-tap
console.log(spinalCase('thisIsSpinalTap'))
// the-andy-griffith-show
console.log(spinalCase('The_Andy_Griffith_Show'))
// all-the-small-things
console.log(spinalCase('AllThe-small Things'))
