//Constructor Function

// function findSum(a, b){
//     return a+b
// }
sum = new Function('a', 'b' , 'return a+b')
console.log(sum(10, 20));