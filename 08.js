/*
User definded function can be following Types
1) Hoisting Function
2) Arrow Function
3) Curring Function
4) Constructor Function
5) Callback Function

*/
/*
1) Hoisting function : Same as normal function. 
   but remember function definition should come first before function call
*/
//case 1:
function findSum(a, b){
    return a+b
}
sum = findSum(10, 20)
console.log(sum);

//output 30


//case 2:

sum = findSum(10, 20)
console.log(sum);
function findSum(a, b){
    return a+b
}
//output : Error : findSum is not defined