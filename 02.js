// Object Destructuring

//Using this we can access any value of an object using key

/*obj = {
    "firstname" : "Logicwave",
    "location" : "Patia",
    "age" : 10,
    "Noofstudent" : 10
}

console.log(obj.age)
console.log(obj.firstname)
console.log(obj.location)
console.log(obj.Noofstudent)

let { firstname, age } = obj
console.log(firstname)
console.log(age);
*/

/*
data = {
    "one": {
        "name" : 'ABC',
        "age" : 20
    },
    "two": {
        "name" : "XYZ",
        "age" : 30
    }
}

let { name } = data.one;
console.log(name);
*/


//Array Destructuring 
let fruits = [ "Apple", "Mango", "Banana", "Pineapple"]

let [fruit1, fruit2] = fruits;

console.log(fruit1, fruit2);


let [fruit3] = [fruits[2]];

console.log(fruit3)