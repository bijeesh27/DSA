let arr = [8, -20, -2, 4, -6, 5];

console.log(arr);

// Bubble Sort: Repeatedly swaps adjacent elements if they are in the wrong order until the array is sorted.

function bubblesort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// bubblesort(arr);
// console.log(arr);
// console.log(bubble("bijeesh".split('')).join(''));

// Insertion Sort: Builds the sorted array one element at a time by inserting elements into their correct position.

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let insertionValue = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > insertionValue) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = insertionValue;
  }
  return arr;
}

// console.log(insertionSort(arr));

// Selection Sort: Repeatedly selects the minimum element from the unsorted part and moves it to the sorted part.

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

// console.log(selectionSort(arr));

// Merge Sort: A divide-and-conquer algorithm that recursively splits the array and merges sorted halves.

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());o
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

// console.log(mergeSort('jenittamoljames'.split('')))

// Quick Sort: A divide-and-conquer algorithm that partitions the array around a pivot and recursively sorts the subarrays.

function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(arr));
