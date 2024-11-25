var myObject = {
    12: "Simon",
    16: "Marta"
};

if (myObject.hasOwnProperty(12)) {
    console.log(myObject[12]);
}else{
    console.log("Property does not exist");
}