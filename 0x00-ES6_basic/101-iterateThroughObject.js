export default function iterateThroughObject(reportWithIterator) {
  const result = [];
  for (const emp of reportWithIterator) {
    result.push(emp);
  }
  return result.join(' | ');
}
