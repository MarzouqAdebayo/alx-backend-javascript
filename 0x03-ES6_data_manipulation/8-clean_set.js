export default function cleanSet(set, startString) {
  const arr = [];
  if (set && set instanceof Set && typeof startString === 'string') {
    for (const str of set.value()) {
      if (startString.length && str.startsWith(startString)) {
        arr.push(str.slice(startString.length));
      }
    }
  }
  return arr.join('-');
}
