/**
 * DNA Pairing
 *
 * Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented
 * by the characters AT and CG,which form building blocks of the DNA double helix.
 *
 * The DNA strand is missing the pairing element. Write a function to match the missing base pairs
 * for the provided DNA strand. For each character in the provided string, find the base pair character.
 * Return the results as a 2d array.
 *
 */

// A
function pairElement(str) {
  const pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }

  return str.split('').map(val => [val, pairs[val]])
}

// B
function pairElement(str) {
  const dna = []

  for (let val of str) {
    switch (val) {
      case 'A': {
        dna.push(['A', 'T'])
        break
      }
      case 'T': {
        dna.push(['T', 'A'])
        break
      }
      case 'C': {
        dna.push(['C', 'G'])
        break
      }
      case 'G': {
        dna.push(['G', 'C'])
        break
      }
    }
  }

  return dna
}
