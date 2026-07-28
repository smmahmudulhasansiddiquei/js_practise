let string = "sabbir";
let reversStr = "";

for(let i = string.length - 1; i>=0; i--){
    reversStr = reversStr + string[i];
}

console.log ("Reverse string: ", reversStr);