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

// Never and void differencies
function printing() {
  console.log("Print Example 1");
  // Here we can use return
  return undefined;
}

const throwError = (message: string) => {
  throw new Error(message);
  // Under the line of new Class Error can't return anithing
  // Because the Date Type returned by the function is "never"
  // and it's not asignable to Data Type "string"
  // Using a condition for example if() we could use a return
}

// Send a function by Callback
function print3 ( a: number,
                  b: number,
                  show: (value: number) => void
                  ): void {
                    let result = a + b;
                    show(result);
                  }
// Calling show()
print3(8, 8, x => { // x = value receibed by function show() ---> result ---> a + b
  console.log(x)
}) // 16



