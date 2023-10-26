/**
 * Confirm the Ending
 *
 * Check if a string (first argument, str) ends with the given target string (second argument, target)
 *
 */

// A
function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}

// B
function confirmEnding(str, target) {
  const re = new RegExp(target + '$')

  return re.test(str)
}
