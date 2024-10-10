interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
  location: "California",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "Florida",
};

const arrayOfStudents: Student[] = [student1, student2];

const table = document.createElement("table");

for (const student of arrayOfStudents) {
  const tr = document.createElement("tr");
  const firstNameCol = document.createElement("td");
  firstNameCol.textContent = student.firstName;
  const locationCol = document.createElement("td");
  locationCol.textContent = student.location;
  tr.appendChild(firstNameCol);
  tr.appendChild(locationCol);
  table.appendChild(tr);
}
document.body.appendChild(table);
