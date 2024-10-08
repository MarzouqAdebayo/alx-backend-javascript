export default function getStudentIdsSum(listOfStudents) {
  if (!Array.isArray(listOfStudents)) {
    return 0;
  }
  return listOfStudents.reduce((prevVal) => prevVal + 1, 0);
}
