export default function cleanSet(set, startString) {
  const arr = [];
  for (const str of set) {
    if (startString && str.startsWith(startString)) {
      arr.push(str.slice(startString.length));
    }
  }
  return arr.join('-');
}
