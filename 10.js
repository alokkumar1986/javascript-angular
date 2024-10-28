//Curring Function
/*
function findSum(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
sum = findSum(10)(20)(30)
console.log(sum);

*/

//Write a program in javascript. sum(2)(3); // Expected output is 5

function findSum(a, b){
    if(b!=undefined){
        return a+b
    }else{
        return function(b){
            return a+b
        }
    }
}

sum = findSum(10)(2)
console.log(sum);

// sum = findSum(10, 2)
// console.log(sum);