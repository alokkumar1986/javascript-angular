//Callback function

// When a function is passed as an argument to another function, it is called callback function

fun1 = (abcd) =>{
    abcd();
    console.log('Inside main function');   
}
greeting = () => {
    console.log('Hello world');    
}

fun1(greeting)