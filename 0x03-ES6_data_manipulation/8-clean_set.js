export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const arr = [];
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      arr.push(value.slice(startString.length));
    }
  }

  return arr.join('-');
}
