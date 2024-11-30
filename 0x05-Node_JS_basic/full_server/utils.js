const fs = require('fs');

/**
 * @typedef {Object.<string, Object.<string, string>[]>} StringArrayMap
 */

/**
 * @param {String} filePath -
 * */
function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
      if (err) reject(new Error('Cannot load the database'));
      if (data) {
        const lines = data.trim().split('\n');
        const header = lines[0].split(',');

        // Dynamically find column indices
        /** @type { StringArrayMap } */
        const studentGroups = {};
        const studentData = [];

        lines.slice(1).forEach((line) => {
          const trimmedLine = line.trim();
          if (trimmedLine) {
            const studentRecord = trimmedLine.split(',');
            const studentObj = {};

            // Dynamically map columns
            header.forEach((columnName, index) => {
              studentObj[columnName] = studentRecord[index];
            });

            studentData.push(studentObj);
          }
        });

        // Group by last column (field)
        studentData.forEach((student) => {
          const field = student[header[header.length - 1]];
          if (!studentGroups[field]) {
            studentGroups[field] = [];
          }
          studentGroups[field].push(student);
        });

        resolve(studentGroups);
      }
    });
  });
}

export default readDatabase;
module.exports = readDatabase;
