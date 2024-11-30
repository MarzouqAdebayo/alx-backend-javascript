import readDatabase from '../utils';

const VALID_MAJORS = ['CS', 'SWE'];

function sorti(a, b) {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  if (a.toLowerCase() > b.toLowerCase()) {
    return +1;
  }
  return 0;
}

class StudentsController {
  static getAllStudents(req, res) {
    const filePath = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(filePath)
      .then((studentGroups) => {
        let responseText = 'This is a list of our students';
        Object.entries(studentGroups).forEach(([key, value]) => {
          const students = value
            .map((student) => student.firstname)
            .sort(sorti);
          responseText += `\nNumber of students in ${key}: ${students.length}. List: ${students.join(', ')}`;
        });
        res.status(200).send(responseText);
      })
      .catch((err) => {
        res
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }

  static getAllStudentsByMajor(req, res) {
    const filePath = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = req.params;

    if (!VALID_MAJORS.includes(major)) {
      res
        .status(500)
        .send(`Major parameter must be ${VALID_MAJORS.join(' or ')}`);
      return;
    }

    readDatabase(filePath)
      .then((studentGroups) => {
        const fieldStudents = studentGroups[major]
          .map((student) => student.firstname)
          .sort(sorti);
        const responseText = `List: ${fieldStudents.join(', ')}`;
        res.status(200).send(responseText);
      })
      .catch((err) => {
        res
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
