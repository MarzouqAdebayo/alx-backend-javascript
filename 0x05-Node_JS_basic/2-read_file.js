const fs = require('fs');

/**
 * @typedef {Object.<string, Object.<string, string>[]>} StringArrayMap
 */
/**
 * countStudents - Counts the number of students in a csv db
 * @param {String} path - path to csv file
 */
function countStudents(path) {
  // Enhanced error handling
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }

  try {
    const lines = fs.readFileSync(path, 'utf-8').toString().trim().split('\n');
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
      const studentNames = group.map((student) => student.firstname).join(', ');
      console.log(
        `Number of students in ${field}: ${group.length}. List: ${studentNames}`,
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
