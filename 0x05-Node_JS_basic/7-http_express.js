const Express = require('express');
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

        let responseText = '';
        // Log total students
        responseText += `Number of students: ${studentData.length}`;
        responseText += '\n';

        // Log students by field
        for (const [field, group] of Object.entries(studentGroups)) {
          const studentNames = group
            .map((student) => student.firstname)
            .join(', ');
          responseText += `Number of students in ${field}: ${group.length}. List: ${studentNames}`;
          responseText += '\n';
        }
        resolve(responseText);
      }
    });
  });
}

const homeRequestHandler = (_, res) => {
  const responseText = 'Hello Holberton School!';
  res.header('Content-Type', 'text/plain');
  res.header('Content-Length', responseText.length);
  res.statusCode = 200;
  res.status(200).send(Buffer.from(responseText));
};

const statusRequestHandler = (_, res) => {
  const resTitle = 'This is the list of our students\n';
  const path = process.argv.length >= 2 ? process.argv[2] : '';
  countStudents(path)
    .then((data) => {
      const responseText = resTitle + data.trim();
      res.header('Content-Type', 'text/plain');
      res.header('Content-Length', responseText.length);
      res.statusCode = 200;
      res.status(200).send(Buffer.from(responseText));
    })
    .catch((err) => {
      const errText = err instanceof Error ? err.message : err.toString();
      const responseText = resTitle + errText;
      res.header('Content-Type', 'text/plain');
      res.header('Content-Length', responseText.length);
      res.statusCode = 200;
      res.status(200).send(Buffer.from(responseText));
    });
};

const PORT = 1245;
const HOST = 'localhost';
const app = Express();

app.get('/', homeRequestHandler);
app.get('/students', statusRequestHandler);

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
