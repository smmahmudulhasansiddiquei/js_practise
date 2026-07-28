let string = "mahmudul";
let count = 0;

for(let i = 0; i < string.length; i++){
    const char = string[i];
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
        count++;
    }
}

console.log ("number of vowel = ", count);