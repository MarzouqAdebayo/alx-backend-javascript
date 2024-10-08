export default function getStudentIdsSum(listOfStudents) {
  if (!Array.isArray(listOfStudents)) {
    return [];
  }
  return listOfStudents.reduce((prevVal) => {
    return prevVal + 1;
  }, 0);
}
