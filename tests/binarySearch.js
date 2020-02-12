// prettier-ignore
let exampleArray = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];

const binarySearch = (array, target) => {
  let startIndex = 0;
  let endIndex = array.length - 1;

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (target === array[middleIndex]) {
      return middleIndex;
    }

    if (target > array[middleIndex]) {
      startIndex = middleIndex + 1;
    }

    if (target < array[middleIndex]) {
      endIndex = middleIndex - 1;
    }
  }

  return -1;
};

console.log(binarySearch(exampleArray, 37));
console.log(binarySearch(exampleArray, 1));
console.log(binarySearch(exampleArray, 59));
console.log(binarySearch(exampleArray, 99));
