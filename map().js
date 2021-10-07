// map() method creates a new array with the results of calling a function for every array element

const nabiName = ["Muhammad (SA)", "Esha (A)", "Musa (A)", "Solaiman (A)"];
const fullNabiName = nabiName.map(element => "Hazrat " + element);
console.log(fullNabiName);