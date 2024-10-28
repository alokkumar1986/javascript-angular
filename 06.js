//Set is similar to array, but doesnt contain any duplicate

/*let s = new Set()

s.add(10)
s.add(20)
s.add(30)

console.log(s);

*/

let a = [10, 20 ,30, 10, 20 , 30]

let s = new Set([...a])

console.log(s);

