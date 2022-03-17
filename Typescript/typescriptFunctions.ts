// ----------------------- Functions ------------------------- //
// Declare de Data Type that returns the function
function addInTs(value1:number, value2:number) : number // Here declare de Data Type that returns the function
{
 return value1 + value2;
}

// The function without return implicitly set Data Type "void" like Data Type value of return.
function printOperation() /*     :  void    */
{
    console.log(addInTs(2,6));
}
//printOperation();

// Arrow Function 
const addTipeA = (v1:number, v2:number) : number => {
    return v1 + v2;
} // IMPORTANT: Even if it an arrow function, must use "return";

// Anonymous Function
const addTypeB = function (v1: number, v2:number) : number {
    return v1 + v2;
}