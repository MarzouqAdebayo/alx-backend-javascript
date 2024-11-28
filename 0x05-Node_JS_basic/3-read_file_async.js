const fs = require('fs');

/**
 * @typedef {Object.<string, Object.<string, string>[]>} StringArrayMap
 */
/**
 * countStudents - Counts the number of students in a csv db
 * @param {String} path - path to csv file
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
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

        // Log total students
        console.log(`Number of students: ${studentData.length}`);

        // Log students by field
        for (const [field, group] of Object.entries(studentGroups)) {
          const studentNames = group
            .map((student) => student.firstname)
            .join(', ');
          console.log(
            `Number of students in ${field}: ${group.length}. List: ${studentNames}`,
          );
        }
        resolve(true);
      }
    });
  });
}

module.exports = countStudents;
