//spread operator ...

let a = ["A", "B", "C"]
let b = ["D", "E", "F", "A"]
let c = ["G", "H", "I"]

let d = [...a, ...b, ...c]
console.log(d)


let num = [100, 200, 3000, 300, 60, 30]
console.log(Math.max(...num));
console.log(Math.min(...num));