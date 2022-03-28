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
// Never and void differencies
function printing() {
    console.log("Print Example 1");
    // Here we can use return
    return undefined;
}
var throwError = function (message) {
    throw new Error(message);
    // Under the line of new Class Error can't return anithing
    // Because the Date Type returned by the function is "never"
    // and it's not asignable to Data Type "string"
    // Using a condition for example if() we could use a return
};
// Send a function by Callback
function print3(a, b, show) {
    var result = a + b;
    show(result);
}
// Calling show()
print3(8, 8, function (x) {
    console.log(x);
}); // 16
