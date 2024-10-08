export default function getStudentIdsSum(listOfStudents) {
  if (!Array.isArray(listOfStudents)) {
    return [];
  }
  return listOfStudents.reduce((prevVal) => prevVal + 1, 0);
}
