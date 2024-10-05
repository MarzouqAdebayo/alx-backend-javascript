/**
 * Represents a classroom.
 * @class
 */
export default class ClassRoom {
  /**
   * Creates a new ClassRoom instance.
   * @param {string} name - The name of the classroom.
   * @param {number} length - The length of the classroom.
   * @param {number} students - The number of students in the classroom.
   * @throws {Error} Will throw a TypeError if any parameter has the wrong type.
   */
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (typeof students !== 'number') {
      throw new TypeError('Students must be a number');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }
}
