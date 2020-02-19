const arr1 = [1, 3, 4, 5];
const arr2 = [2, 4, 6, 8];

function insert(array, index, value) {
  array.splice(index, 0, value);
}

function mergeSortedArray(array1, array2) {
  const array3 = [...array1];
  for (let i = 0; i < array2.length; i++) {
    for (let j = 1; j < array1.length; j++) {
      if (array2[i] >= array1[j - 1] && array2[i] <= array1[j]) {
        array3.splice(j + i, 0, array2[i]);
      }
    }
    if (array2[i] > array1[array1.length - 1]) {
      console.log(i, array2[i]);
      array3.push(array2[i]);
    }
  }

  return array3;
}

function mergeSortedArray2(array1, array2) {
  let result = [];
  let n1 = array1.length;
  let n2 = array2.length;
  let i = 0,
    j = 0;
  while (i < n1 && j < n2) {
    if (array1[i] < array2[j]) {
      result.push(array1[i++]);
    } else {
      result.push(array2[j++]);
    }
  }
  while (i < n1) {
    result.push(array1[i++]);
  }
  while (j < n2) {
    result.push(array2[j++]);
  }

  return result;
}

const a3 = mergeSortedArray2(arr1, arr2);
console.log(a3);

console.log(mergeSortedArray2([5, 8, 9], [ 4, 7, 12, 34]))