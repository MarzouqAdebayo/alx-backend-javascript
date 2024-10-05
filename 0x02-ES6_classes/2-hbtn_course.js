/**
 * Represents a classroom.
 * @class
 */
export default class HolbertonCourse {
  /**
   * Creates a new HolbertonCourse instance.
   * @param {string} name - The name of the classroom.
   * @param {number} length - The length of the classroom.
   * @param {String[]} students - The number of students in the classroom.
   * @throws {Error} Will throw a TypeError if any parameter has the wrong type.
   */
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * Gets the name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of the course.
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  /**
   * Gets the length of the course (in months).
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length of the course (in months).
   */
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  /**
   * Gets the array of students in the course.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the names of students in this course.
   */
  set students(students) {
    if (Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}
