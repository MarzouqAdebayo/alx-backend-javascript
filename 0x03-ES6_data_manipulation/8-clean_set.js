export default function cleanSet(set, startString) {
  const arr = [];
  if (set instanceof Set) {
    for (const str of set) {
      if (
        startString
        && typeof startString === 'string'
        && str.startsWith(startString)
      ) {
        arr.push(str.slice(startString.length));
      }
    }
  }
  return arr.join('-');
}
