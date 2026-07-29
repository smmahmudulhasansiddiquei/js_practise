let arr = [1,2,3,4,5,6,7,8,9];
let revArr = [];

for(let i = arr.length -1; i >= 0; i--){
    revArr.push(arr[i]);
}

console.log("Reverse array = ", revArr);


// ================Find Maximum number of this array========================//

let arrMax = [0];
for(let j = 0; j <= arr.length; j++){
    if(arr[j] > arrMax){
        arrMax = arr[j];
    }
}

console.log("Maximum number of this arrray = ", arrMax);