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
   console.log(add(2, 3)) /* -----> 5   */
/* console.log(add("2","3")) --> ERROR  */

// Declare variables

// Indicate data type
// let example1 : string = "Old house"; 

// Type inference
// let example1 = "Old house";

// a).- 
let person1 = {
    name: "Marie",
    age: 35,        // Assigning values
    adress: "Omaha 140"
}



// b).-
let person2 : {
    name: string;
    age: number;     // Defining type
    adress: string;  
} = {
    name: "Jason",
    age: 45,        // Assigning values
    adress: "Saint Rought 55"
}