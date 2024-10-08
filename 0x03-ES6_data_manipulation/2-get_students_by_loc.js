export default function getStudentsByLocation(listOfStudents, location) {
  if (!Array.isArray(listOfStudents)) {
    return [];
  }
  return listOfStudents.filter((item) => item.location === location);
}
