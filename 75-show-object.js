var myObject = {
    12: "Simon",
    16: "Marta"
}

//two methods to add new properties to an object

switch (myObject[12]) {
    case "Simon":
        console.log("Hello Simon!");
        break;
    case "Marta":
        console.log("Hello Marta!");
        break;
    default:
        console.log("Hello!");
}

console.log(myObject[12]);