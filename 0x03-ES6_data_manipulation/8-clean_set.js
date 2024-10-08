export default function cleanSet(set, startString) {
  const arr = [];
  if (set instanceof Set && typeof startString === 'string' && startString) {
    for (const str of set.value()) {
      if (str.startsWith(startString)) {
        arr.push(str.slice(startString.length));
      }
    }
  }
  return arr.join('-');
}
