export default function appendToEachArrayValue(array, appendString) {
  for (const value of array.entries()) {
    array[value[0]] = appendString + value[1];
  }

  return array;
}
