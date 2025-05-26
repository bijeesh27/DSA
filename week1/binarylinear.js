//Function to perform binary search on a sorted array and return the index of the target element

function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return "Invalid Target";
}

// Function to perform linear search on an array and return the index of the target element

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return "Invalid Target";
}



let arr = [2, 3, 4, 9];
let target = 4;

console.log(binarySearch(arr, target));
console.log(linearSearch(arr, target));
