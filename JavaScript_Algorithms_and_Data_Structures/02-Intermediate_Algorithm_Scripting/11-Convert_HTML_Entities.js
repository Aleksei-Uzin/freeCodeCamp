/**
 * Convert HTML Entities
 *
 * Convert the characters:
 *  - &, <, >, " (double quote), and ' (apostrophe),
 * in a string to their corresponding HTML entities.
 *
 */

// A
function convertHTML(str) {
  const elements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  }

  return str.replace(/[&<>\"']/g, match => elements[match])
}

// B
function convertHTML(str) {
  return str.replace(/[&<>\"']/g, match => {
    switch (match) {
      case '&':
        return '&amp;'
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '"':
        return '&quot;'
      case "'":
        return '&apos;'
    }
  })
}
