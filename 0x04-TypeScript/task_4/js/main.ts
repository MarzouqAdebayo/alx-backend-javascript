export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();
export const teacher: Subjects.Teacher = {
  firstName: "Dennis",
  lastName: "Ritchie",
  experienceTeachingC: 10,
};

console.log("C++");
cpp.setTeacher = teacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("Java");
java.setTeacher = teacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("React");
react.setTeacher = teacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
