const fs = require('fs');

/**
 * @typedef {Object.<string, string[]>} StringArrayMap
 * */

/**
 * countStudents - Counts the number of students in a csv db
 * @param {String} path - path to csv file
 */
function countStudents(path) {
  try {
    const lines = fs.readFileSync(path, 'utf-8').toString().trim().split('\n');
    const allFields = lines[0].split(',');
    const nameIdx = allFields.indexOf('firstname');
    const fieldIdx = allFields.indexOf('field');
    const csvArr = lines.slice(1).map((line) => line.split(','));
    /** @type {StringArrayMap} */
    const groupByField = {};
    csvArr.forEach((student) => {
      const studentField = student[fieldIdx];
      const studentName = student[nameIdx];
      if (!groupByField[studentField]) {
        groupByField[studentField] = [studentName];
      } else {
        groupByField[studentField].push(studentName);
      }
    });
    console.log('Number of students: ', csvArr.length);
    for (const [field, names] of Object.entries(groupByField)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
