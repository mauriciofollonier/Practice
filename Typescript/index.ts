// -------------------------------------------- Javascript --------------------------------------------//

// function add(value1, value2) {
//  return value1 + value2;
// }
// console.log(add(2, 3)) /* -----> 5   */
// console.log(add("2","3")) /* --> 23  */

// -------------------------------------------- Typescript --------------------------------------------//
function add(value1:number, value2:number) {
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
let person1 = {
    name: "Marie",
    age: 35,        // Assigning values
    adress: "Omaha 140"
}



// b) 1--.-
let person2 : {
    name: string;
    age: number;     // Defining type
    adress: string;  
} = {
    name: "Jason",
    age: 45,        // Assigning values
    adress: "Saint Rought 55"
}
//    2--.-
let person3 : {
    name: string;
    age: number;     // Defining type
    adress: string;
    hobbies: {
        1: string,
        2: string;
    }
} = {
    name: "Matt",
    age: 15,        // Assigning values
    adress: "Main st 144",
    hobbies: {
        1: "Tenis",
        2: "Soccer"
    }
}

// ------------------------ Array ------------------------- //
let interests:string[];
// let interests:string[] = ['Music', 'Sports', 'Reads'];
// let interests = ['Music', 'Sports', 'Reads'];
let interests2:any[];
interests = ['Music', 'Sports', 'Reads'];
interests2 = ['Free', 55, true];

// for
/* for (const i of interests2) {
    console.log(i)
} */

// ------------------------ Tuples ------------------------- //
// We can define the data type in all elements of the array, index by index. 
let car:[string,number,string] = ['Alfa Romeo', 1998, 'gray'];
car[1] = 1999;
// car[1] = 'ninety-eight'; ------> ERROR

// * Save restrictions in a variable.
type carRestriction = [string,number,string];
// Reutilize new restriction in a new variable.
let car1:carRestriction = ['Honda', 2005, 'orange'];


// ------------------------ Enums ------------------------- //
enum state {sucess, pendient, fail};
let transaction = {
    oNumber: 1,
    oName: 'Jonh',
    oState: state.sucess
}

// ------------------------ Union ------------------------- //
// Set more than one data type in a variable.
// Example variable
let multiType: string | boolean = 'One'; // Only accepts type string OR boolean, other type throw ERROR.
// Example in a function
function padLeft(value: string, padding: string | number) { // The data type for variable "padding" can be string OR number
 if (typeof padding === 'number') {
  return Array(padding + 1).join(' ') + value;
 }
 if (typeof padding === 'string') {
  return padding + value;
 }
 throw new Error(`Expected string, received ${padding}`) 
}

// console.log(padLeft("Hello World", 20));
// console.log(padLeft("Hello World", true));------> ERROR

// ------------------------ Literal ------------------------- //
let nicky: 'Nickname';
   nicky = 'Nickname'
// nicky = 'IJIJjiji' -----> ERROR Only accepts declared Data Type 'Nickname'.