const string = "I love you very much!";
let count = 1;

for (let i = 0; i < string.length; i++) {
  if (string[i] === " ") {
    count++;
  }
}

console.log("Word count:", count);
