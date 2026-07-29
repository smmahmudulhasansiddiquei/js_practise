let string = "mahmudul1234hasan21";
let count = 0;

for(let i = 1; i <= string.length; i++){
    if(string [i] >= "0" && string [i] <= "9"){
        count++;
    }
}

console.log(count);