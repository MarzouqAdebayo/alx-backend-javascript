export default function appendToEachArrayValue(array, appendString) {
  for (let item of array) {
    const value = item;
    item = appendString + value;
  }

  return array;
}
