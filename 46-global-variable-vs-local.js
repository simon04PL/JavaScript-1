var myVariable = 10;

function myFunction() {
  var myVariable = 20;//stronger than global variable
  console.log(myVariable);
}

myFunction();