const fs = require('fs');

/**
 * countStudents - Counts the number of students in a csv db
 * @param {String} path - path to csv file
 */
function countStudents(path = './database.csv') {
  try {
    const data = fs.readFileSync(path);
    const lines = String(data).trim().split('\n');
    console.log('Number of students: ', lines.length - 1);
    const csvArr = lines.slice(1).map((line) => line.split(','));
    const csStudents = csvArr.filter((student) => student.includes('CS'));
    const csStudentsNames = csStudents.map((student) => student[0]);
    console.log(
      `Number of students in CS: ${csStudents.length}. List: ${csStudentsNames.join(', ')}`,
    );
    const sweStudents = csvArr.filter((student) => student.includes('SWE'));
    const sweStudentsNames = sweStudents.map((student) => student[0]);
    console.log(
      `Number of students in CS: ${sweStudents.length}. List: ${sweStudentsNames.join(', ')}`,
    );
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
