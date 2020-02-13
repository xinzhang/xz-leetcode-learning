const array = [10, 4, 2, 5, 2, 1, 9, 0];

const bubbleSort = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        current = array[j];
        array[j] = array[j - 1];
        array[j - 1] = current;
      }
    }
  }
  return array;
};

// ----------

const partition = (items, left, right) {
  const pivot = items[ Math.floor((right + left)/2) ];
  const i =left, j = right;
  while ( i< j) {
    whie
  }
}

const quickSort = items => {
  let index;
  if (items.length > 1) {
    index = partition(items, 0, items.length-1);
    if (index -1 > 0) {
      quickSort()
    }
  }

  return items;

}


console.log(bubbleSort(array));
