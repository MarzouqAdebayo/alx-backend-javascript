export default function* createIteratorObject(report) {
  for (const obj of Object.values(report.allEmployees)) {
    for (const employee of obj) {
      yield employee;
    }
  }
}
