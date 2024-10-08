export default function cleanSet(set, startString) {
  const arr = [];
  if (set instanceof Set && typeof startString === 'string') {
    for (const str of set) {
      if (
        startString.length
        && str.startsWith(startString)
      ) {
        arr.push(str.slice(startString.length));
      }
    }
  }
  return arr.join('-');
}
