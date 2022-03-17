// -------------------------------------------- Javascript --------------------------------------------//
// function add(value1, value2) {
//  return value1 + value2;
// }
// console.log(add(2, 3)) /* -----> 5   */
// console.log(add("2","3")) /* --> 23  */
// -------------------------------------------- Typescript --------------------------------------------//
function add(value1, value2) {
    return value1 + value2;
}
/* console.log(add(2, 3)) -----> 5      */
/* console.log(add("2","3")) --> ERROR  */
// Declare variables
// Indicate data type
// let example1 : string = "Old house"; 
// Type inference
// let example1 = "Old house";
// ----------------------- Object ------------------------- //
// a).- 
var person1 = {
    name: "Marie",
    age: 35,
    adress: "Omaha 140"
};
// b) 1--.-
var person2 = {
    name: "Jason",
    age: 45,
    adress: "Saint Rought 55"
};
//    2--.-
var person3 = {
    name: "Matt",
    age: 15,
    adress: "Main st 144",
    hobbies: {
        1: "Tenis",
        2: "Soccer"
    }
};
// ------------------------ Array ------------------------- //
var interests;
// let interests:string[] = ['Music', 'Sports', 'Reads'];
// let interests = ['Music', 'Sports', 'Reads'];
var interests2;
interests = ['Music', 'Sports', 'Reads'];
interests2 = ['Free', 55, true];
// for
/* for (const i of interests2) {
    console.log(i)
} */
// ------------------------ Tuples ------------------------- //
// We can define the data type in all elements of the array, index by index. 
var car = ['Alfa Romeo', 1998, 'gray'];
car[1] = 1999;
// Reutilize new restriction in a new variable.
var car1 = ['Honda', 2005, 'orange'];
// ------------------------ Enums ------------------------- //
var state;
(function (state) {
    state[state["sucess"] = 0] = "sucess";
    state[state["pendient"] = 1] = "pendient";
    state[state["fail"] = 2] = "fail";
})(state || (state = {}));
;
var transaction = {
    oNumber: 1,
    oName: 'Jonh',
    oState: state.sucess
};
// ------------------------ Union ------------------------- //
// Set more than one data type in a variable.
// Example variable
var multiType = 'One'; // Only accepts type string OR boolean, other type throw ERROR.
// Example in a function
function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error("Expected string, received ".concat(padding));
}
// console.log(padLeft("Hello World", 20));
// console.log(padLeft("Hello World", true));------> ERROR
// ------------------------ Literal ------------------------- //
var nicky;
nicky = 'Nickname';
// nicky = 'IJIJjiji' -----> ERROR Only accepts declared Data Type 'Nickname'.
