/**
 * Class respresents a classroom
 */
export default class ClassRoom {
  /**
   * Creates a new @see {@link ClassRoom}
   * @param {Number} maxStudentSize - The maximum number
   * that can be in a classroom
   */
  constructor(maxStudentSize) {
    this._maxStudentSize = maxStudentSize;
  }
}
