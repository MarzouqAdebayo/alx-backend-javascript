export default function cleanSet(set, startString) {
  if (
    !(set instanceof Set)
    || typeof startString !== 'string'
    || !startString
  ) {
    return '';
  }
  const arr = [];
  for (const str of set.value()) {
    if (
      typeof str === 'string'
      && str
      && str.startsWith(startString)
    ) {
      arr.push(str.slice(startString.length));
    }
  }
  return arr.join('-');
}
