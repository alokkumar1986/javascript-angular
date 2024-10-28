//map / filter functions

//These two are operatored in Array or Object

/*
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

modnum = num.map(item => item +1 );

console.log(modnum)

filternum = num.filter(item => item%2 ==0)

console.log(filternum);
*/
/*
map : same number of items 
      every item is modified


filter : new number of items <= existing number item in array
         item is not modified
*/

let arr = ["Ram", "Shyam", "Hari", "Govind"]

//["Ram Sunder", "Shyam Sunder", "Hari Sunder", "Govind Sunder"]

let newarr = arr.map(i => i+ " Sunder");

console.log(newarr);

//["Ram", "Hari"]

let newarr1 = arr.filter(i => i.length<=4)

console.log(newarr1);


let obj = [{ 
        "name" : 'ABC',
        "age" : 20
    }, {
        "name" : "XYZ",
        "age" : 30
    } ]  
   


let newobj  = obj.filter(item => { 
    console.log(item)
    return (item.age)>25 
    })
console.log(newobj);

let newobj1  = obj.map(item =>  
    item.age+5
    )
console.log(newobj1);
console.log(obj);