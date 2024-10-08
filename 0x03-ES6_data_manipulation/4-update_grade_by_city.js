export default function updateStudentGradeByCity(
  listOfStudents,
  city,
  newGrades,
) {
  if (!Array.isArray(listOfStudents)) {
    return [];
  }
  return listOfStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const studentGrade = newGrades.filter(
        (grade) => grade.studentId === student.id,
      );
      if (!studentGrade.length) {
        return { ...student, grade: 'N/A' };
      }
      return { ...student, grade: studentGrade[0] };
    });
}
