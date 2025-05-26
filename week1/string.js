//Function to capitalize the last character of each word in a string

let str = "my name is john";

function xyz(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i === str.length - 1 || str[i + 1] == " ") {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(xyz(str));
