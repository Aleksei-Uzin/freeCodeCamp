/**
 * Make a Person
 *
 * Fill in the object constructor with the following methods below:
 *  - getFirstName()
 *  - getLastName()
 *  - getFullName()
 *  - setFirstName(first)
 *  - setLastName(last)
 *  - setFullName(first, last)
 *
 */

const Person = function (first, last) {
  const name = [first, last]

  this.getFirstName = function () {
    return name[0]
  }
  this.getLastName = function () {
    return name[1]
  }
  this.getFullName = function () {
    return name.join(' ')
  }
  this.setFirstName = function (first) {
    name[0] = first
  }
  this.setLastName = function (last) {
    name[1] = last
  }
  this.setFullName = function (first, last) {
    this.setFirstName(first)
    this.setLastName(last)
  }
}
