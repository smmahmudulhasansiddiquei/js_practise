let arr = [4, 7, 5, 9, 2, 1];
let arrMax = arr[0];

for(let i = 1; i < arr.length; i++){
    if(arr[i] > arrMax){
        arrMax = arr[i];
    }
}

console.log ("Max number of array = ", arrMax);

