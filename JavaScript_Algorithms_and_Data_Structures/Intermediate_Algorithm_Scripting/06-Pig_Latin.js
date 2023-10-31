/**
 * Pig Latin
 *
 * Pig Latin is a way of altering English Words. The rules are as follows:
 *  - If a word begins with a consonant, take the first consonant or consonant cluster,
 *    move it to the end of the word, and add "ay" to it
 *  - If a word begins with a vowel, just add "way" at the end
 *
 */

// A
function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, '$&way')
    .replace(/(^[^aeiou]+)(\w+)?/, '$2$1ay')
}

// B
function translatePigLatin(str) {
  return /(^[^aeiou]+)/.test(str)
    ? str.replace(/(^[^aeiou]+)(\w+)?/, '$2$1ay')
    : str.concat('way')
}

// Should return
// "aliforniacay"
console.log(translatePigLatin('california'))
// algorithmway
console.log(translatePigLatin('algorithm'))
// Should handle words without vowels
// rhythmay
console.log(translatePigLatin('rhythm'))
