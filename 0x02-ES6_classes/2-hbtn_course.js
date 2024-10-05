export default class ClassRoom {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('TypeError: Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new Error('TypeError: Length must be a number');
    }
    if (typeof students !== 'number') {
      throw new Error('TypeError: Students must be a number');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }
}
