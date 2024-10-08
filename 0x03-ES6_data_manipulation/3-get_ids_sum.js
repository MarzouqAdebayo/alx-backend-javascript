export default function getStudentIdsSum(listOfStudents) {
  if (!Array.isArray(listOfStudents)) {
    return 0;
  }
  return listOfStudents.reduce((prevVal, curVal) => prevVal + curVal.id, 0);
}
