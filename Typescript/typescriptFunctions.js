// ----------------------- Functions ------------------------- //
// Declare de Data Type that returns the function
function addInTs(value1, value2) {
    return value1 + value2;
}
// The function without return implicitly set Data Type "void" like Data Type value of return.
function printOperation() {
    console.log(addInTs(2, 6));
}
//printOperation();
// Arrow Function 
var addTipeA = function (v1, v2) {
    return v1 + v2;
}; // IMPORTANT: Even if it an arrow function, must use "return";
// Anonymous Function
var addTypeB = function (v1, v2) {
    return v1 + v2;
};
