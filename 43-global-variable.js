//it is a global variable defined outside of a function
var globalVar = 'This is a global variable';

function myFunction() {
    //it is a local variable defined inside a function
    otherGlbal =5;
}

function myOtherFunction() {
    console.log(globalVar);
    console.log(otherGlbal);
}

myFunction();
myOtherFunction(); 