let array = ["banana", "orange", "apple", "lichi", "mango", "painaapple"];
let target = "book";
let found = false;

for(let i = 0; i <= array.length; i++){
    if(array[i] === target){
        found = true;
    }
}

if(found == true){
    console.log("Targeted element is found");
}else{
    console.log("Targeted element is not found");
}