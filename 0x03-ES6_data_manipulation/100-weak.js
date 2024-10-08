export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const exists = weakMap.get(endpoint);
  if (exists) {
    const val = exists + 1;
    if (val >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, val);
  } else {
    weakMap.set(endpoint, 1);
  }
}
