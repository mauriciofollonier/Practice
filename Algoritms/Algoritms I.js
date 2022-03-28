/* ===================================================== NIVEL I ===================================================== */

// 1) .-

// Dada una matriz cuadrada, calcule la diferencia absoluta entre las sumas de sus diagonales.

// Por ejemplo, la matriz cuadradase muestra a continuación:
//
// 3     (entero que indica cantidad de filas y columnas)
//
// 1 2 3
// 4 5 6
// 9 8 9  
// La diagonal de izquierda a derecha 1 + 5 + 9 = 15. La diagonal de derecha a izquierda 3 + 5 + 9 = 17. Su diferencia absoluta es |15-17| = 2.
// Devuelve la diferencia absoluta entre las sumas de las dos diagonales de la matriz como un solo número entero.

function diagonalDifference(arr) {
    // Write your code here
    let diag1 = 0;
    let diag2 = 0; 
    let diff = 0;
    for (let i = 0; i <= arr.length -1; i++) {
     diag1 += arr[i][i];
     diag2 += arr[i].reverse()[i]
     }
    diff = Math.abs(diag1 - diag2)
    return diff;
}

// 2) .-
// Dada una matriz de enteros, calcule las proporciones de sus elementos que son positivos , negativos y cero . Imprime el valor decimal de cada fracción en una nueva línea con 6 lugares después del decimal.

// Nota: Este desafío presenta problemas de precisión. Los casos de prueba están escalados a seis decimales, aunque las respuestas con un error absoluto de hasta 10^4 son aceptables.

// Ejemplo

// Existen 5 elementos, dos positivos, dos negativos y uno cero. sus proporciones son 2/5 = 0.400000 2/5 = 0.400000 1/5 = 0.200000. Los resultados se imprimen como:
// 0.400000
// 0.400000
// 0.200000

function plusMinus(arr) {
// Write your code here
let n = arr.length;
let pos = 0; 
let neg = 0;
let zer = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
    neg += 1;
    }
    if (arr[i] > 0) {
    pos += 1;
    }
    if (arr[i] === 0) {
    zer += 1;
    }
}
    console.log((pos/n).toFixed(6));
    console.log((neg/n).toFixed(6));
    console.log((zer/n).toFixed(6));
}

// 3) .-
// Esta es una escalera de tamaño: n = 4

//    #
//   ##
//  ###
// ####

// Su base y su altura son ambas iguales a 'n'. Se dibuja usando #símbolos y espacios. La última línea no va precedida de ningún espacio.
// Escriba un programa que imprima una escalera de tamaño 'n'.

function staircase(n) {
// Write your code here
let simbol = '#';
let space = ' ';
  for (let i = 0; i <= n; i++) {
    console.log(space.repeat(n-i) + simbol.repeat(i+1));
  }
}

// 4) .-
// Dados cinco enteros positivos, encuentre los valores mínimo y máximo que se pueden calcular sumando exactamente cuatro de los cinco enteros. Luego imprima los respectivos valores mínimo y máximo como una sola línea de dos enteros largos separados por espacios.

// Ejemplo
// let arr = [1, 3, 5, 7, 9]

// La suma mínima es
// 1 + 3 + 5 + 7 = 16 <<==== SUMA MINIMA

// y la suma máxima es 
// 3 + 5 + 7 + 9 = 24 <<==== SUMA MAXIMA

//La función imprime
//                     16 24 <<====  OUTPUT FINAL

function miniMaxSum(arr) {
    // Write your code here
    let minSum = 0;
    let maxSum = 0;
    arr = arr.sort(function (a, b) {
        return a - b;
    })
    for (let i = 0; i < arr.length-1; i++) {
      minSum += arr[i];
      maxSum += arr[i+1];
    }
      console.log( minSum, maxSum);
}

// 5) .- 
// Estás a cargo de la torta para el cumpleaños de un niño. Has decidido que el pastel tendrá una vela por cada año de su edad total. Solo podrán apagar la vela más alta. Cuenta cuántas velas son más altas.

// Input example
// 4 
// 3 2 1 3

// Output expected
// 2

// Explicación
// Las alturas de las velas son [3, 1, 2, 3]. Las velas más altas son las de 3 unidades y hay 2 de ellos.

function birthDayCake(candles) {
    // Write your code here
 let countCandles = 0;
 let max = Math.max(...candles);

 for (let i = 0; i < candles.length; i++) {
   if (candles[i] === max) {
     countCandles += 1
   } 
 }
  return countCandles;
}

// 6) .-
// Dado un tiempo en formato de 12 horas AM/PM , conviértalo a hora militar (24 horas).

// Nota: - 12:00:00 AM en un reloj de 12 horas es 00:00:00 en un reloj de 24 horas.
// - 12:00:00 PM en un reloj de 12 horas es 12:00:00 en un reloj de 24 horas.

// Ejemplo
// s = '12:01:00PM'
// Return '12:01:00'.

// s = '12:01:00AM'
// Return '00:01:00'.

function timeConversion(s) {
    // Write your code here
    let hour = s.slice(0,2)
    let minSeg = s.slice(2,8);
    let amPm = s.slice(8,10);
      
    if (s.includes('AM') && Number(hour) !== 12) {
      return hour+minSeg;
    }
    else if (s.includes('AM') && Number(hour) === 12) {
      return "00"+minSeg;
    }
    else if (s.includes('PM') && Number(hour) === 12) {
      return "12"+minSeg;
    }else {
      return Number(hour)+12+minSeg;
     }
}

/* ===================================================== NIVEL II ===================================================== */

// 7) .- Apple and Orange
// La casa de Sam tiene un manzano y un naranjo que dan abundante fruta. Usando la información dada a continuación, determine la cantidad de manzanas y naranjas que caen en la casa de Sam.

// El manzano está a la izquierda de la casa y el naranjo está a su derecha.
// Suponga que los árboles están ubicados en un solo punto, donde el manzano está en el punto a, y el naranjo está en el punto b.
// Cuando una fruta cae de su árbol, aterriza unidades "d" de distancia desde su árbol de origen a lo largo de la-eje x. *Un valor negativo de "d" significa que la fruta cayó "d" unidades a la izquierda del árbol, y un valor positivo de "d" significa que cae "d" unidades a la derecha del árbol. *
// Dado el valor de "d" por manzanas "m" y naranjas "n", determine cuántas manzanas y naranjas caerán en la casa de Sam (es decir, en el rango inclusivo [s, t])? 

// Por ejemplo, la casa de Sam está entre s = 7 y t = 10. El manzano se encuentra en a = 4 y la naranja en b = 12. Existen m = 3 manzanas y n = 3 naranjas se tiran manzanas apples=[2, 3, -4] unidades de distancia de, y oranges = [3, -2, -4] unidades de distancia. Sumando la distancia de cada manzana a la posición del árbol, aterrizan en [4+2, 4+3, 4+-4]=[6, 7, 0]. Las naranjas aterrizan en [12+3, 12+-2, 12 +-4]=[15, 10, 8]. Una manzana y dos naranjas aterrizan en el rango inclusivo.entonces imprimimos
// 1 -------> apples
// 2 -------> oranges

// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.

// Ejemplo

// let apples = [2, 3, -4];
// let oranges = [3, -2, -4];
// let a = 4;
// let b = 12;
// let s = 7;
// let t = 10;

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let applesCount = 0;
    let orangesCount = 0;

     for (let i = 0; i <= apples.length;i++) {
         if (apples[i]+a >= s && apples[i]+a <= t) {
         applesCount += 1;
        }
     }
     for (let i = 0; i <= oranges.length;i++) {
        if (oranges[i]+b >= s && oranges[i]+b <= t) {
         orangesCount += 1;
        }
     }  
     console.log(applesCount);
     console.log(orangesCount);
}

// 8) .-
// Estás coreografiando un espectáculo de circo con varios animales. Para un acto, se le dan dos canguros en una recta numérica listos para saltar en la dirección positiva (es decir, hacia el infinito positivo).

// El primer canguro comienza en la ubicación x1 y se mueve a una velocidad de v1 metros por salto.
// El segundo canguro comienza en la ubicación x2 y se mueve a una velocidad de v2 metros por salto.
// Tienes que encontrar una manera de llevar a ambos canguros al mismo lugar al mismo tiempo como parte del espectáculo. Si es posible, devuelve YES, de lo contrario, devuelve NO.
// Después de un salto, ambos están en x = 3 
// (x1 + v1) = 3    ||  (x2 + v2) = 3 por lo que la respuesta es "YES".

// let x1 = 0; 
// let v1 = 3;           
// let x2 = 4;        
// let v2 = 2; 

// Ejemplos

// let x1 = 0;        let x1 = 0;
// let v1 = 3;        let v1 = 2;        
// let x2 = 4;        let x2 = 5;
// let v2 = 2;        let v2 = 3;

//             Output
// "YES"                "NO"


function kangaroo(x1, v1, x2, v2) {
  // Write your code here
let jumps = Math.abs((x2 - x1) / (v2 - v1));
let resto = Math.abs(x2 - x1) % (v2 - v1);

console.log("JUMPS",jumps)
console.log("RESTO",resto)
  if(resto != 0 || (x1<x2&&v1<v2)) {
    return "NO";
  }
  else if(resto === 0) {
    return "YES";
  }
}

// 9) .-
// Given an array of integers, keep a total score based on the following:
// - Add 1 point for every even number (numero par) in the array.
// - Add 3 points for every odd number (numero impar) in the array, except for the number '5'.
// - Add 5 points every time the number '5' appear in the array.
// - Number '0' considered even (par).
// Examples
// Input: [ 1, 2, 3, 4, 6]; 
// Output: 13
// Input: [ 0, 1, 2, 3, 4, 6]; 
// Output: 14
// Input: [ 5, 5, 5]; 
// Output: 15
export function findTotal( numbers ) {
  //Insert your code here 
  let total = 0;
  numbers.forEach( number => {
    if (number % 2 !== 0 && number !== 5) total+= 3;
    else if (number % 2 === 0 || number === 0) total += 1;
    else if (number === 5) total += 5;
  })
  return total;
}

// 10) 
//     a).- Fibonacci
function nFibonacci() {
  // Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
let fibonacci = [0, 1];
  for (let i = 2; i < 11; i++) {
    fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
    //console.log(fibonacci)
  }
  return fibonacci;
}
//     b).- Tribonacci
/* Create a function implementing the Tribonacci sequence. This is a variation on the Fibonacci sequence, in wich every next number is found by adding up the two preceding numbers. The tribonacci sequence is similar, but instead of starting with two predetermined numbers, the sequence starts with three predetermined numbers and each subsequent number is the sum of the three preceding numbers
The function has two parameters:
 - A signature array of 3 elements cointaining the predetermined starting numbers of the tribonacci sequence.
 - A non-negative integer of the first "n" elements that the functions should return.
 
 If n == 0, return 0
 
 Examples 
 * tribonacci([ 0, 0, 1], 9) // should == [ 0, 0, 1, 1, 2, 4, 7, 13, 24]
 * tribonacci([ 1, 1, 1], 5) // should == [ 1, 1, 3, 5]
 * tribonacci([ 1, 2, 3], 2) // should == [ 1, 2]
 
 */
 function tribonacci( signature, n ) {
  //Insert your code here
  if (n === 0) return 0;
  else if (n < signature.length) return signature.slice(0,n);
  else if (n >= signature.length) {
    for (let i = 3; i < n; i++) {
      signature.push(signature[i-1] + signature[i-2] + signature[i-3]);
  }
  return signature;
  }
}

// 11).- Debugging
/* A stack is a data structure that has some parallels with an array. Both have methods that include "push()" and "pop()". A stack, however, has the special LIFO property (Last In First Out). Think of it as stack of dishes. To take dishes off the stack, you grab the one on top and remove it.7
 - The following are common stack operations:
   1. push: pushes a new element on top of a stack;
   2. pop: removes the top element from the stack;
   3. peek: takes the top element from the stack, but, unlike pop, doesn't remove the element;
   4. swap: swaps the position of the top two elements
   
 - The given script performs these stack operations. The function is called "stack()" and contains two parameters:
   1. stackOperation: this parameter prescribes the stack operation, such as push and pop.
   2. stackvalue: this parameter prescribes the item to be pushed on top of a stack. This parameter is only useful when we want to push an item on the stack.
   
   
  ** The stack function should return an array (even if there's just one position to return).
   Our operations are supposed to manipulate this stack based on the "stackOperation" parameter. However, the initial code doesn't function as described above. YOUR TASK IS TO INVESTIGATE THE CODE AND FIX THE BUGS*/
function stack( stackOperation, stackValue ) {
  var stackHolder = {
    count: 4,
    storage : [
      1,
      '{id: 1,value: "obj"}',
      "stringHolder",
      46
    ]
    };
    
    var push = function(value) {
    stackHolder.storage[ stackHolder.storage.length] = value;
    stackHolder.count += 1;  
    return stackHolder.storage;
    }
    // push('Martin')
    // console.log(stackHolder)
    // console.log(push('Martin'))
    // console.log(stackHolder.storage[stackHolder.count])
    
    var pop = function() {
      if (stackHolder.count === 0) {
      return [];
      }
      var poppedItem = stackHolder.storage[stackHolder.storage.length-1];
      
     // console.log(stackHolder)
     // console.log(poppedItem)
      
     stackHolder.storage.splice(stackHolder.storage.length-1);
     stackHolder.count -= 1;
      return poppedItem;
    }
    //pop()
    //console.log(stackHolder)
    
    var peek = function() {
    let itemPeek = stackHolder.storage[stackHolder.storage.length-1];
    //console.log(itemPeek)
      return itemPeek;
    }
    //peek()
    //console.log(stackHolder)
  
    var swap = function() {
    let temp0 = null;
    let temp1 = null;
     temp0 = stackHolder.storage[stackHolder.storage.length-1];
     temp1 = stackHolder.storage[stackHolder.storage.length-2];
     stackHolder.storage[stackHolder.storage.length-1] = temp1;
     stackHolder.storage[stackHolder.storage.length-2] = temp0;
    return stackHolder.storage;
    }
    //swap()
    //console.log(stackHolder)
    
    switch(stackOperation) {
    case 'push':
      push(stackValue);
    break;
    case 'pop':
      return pop();
    break;
    case 'swap':
      swap();
    break;
    case 'peek':
     peek();
    return peek;
    break;
    default:
      return stackHolder.storage;
    }
    return stackHolder.storage;
  //console.log(stackHolder)
}

// 12).- 
// Funcion que recibe una cadena (string) que puede contener letras, numeros, simbolos o espacios vacios, devolver el caracter que mas se repite y el N° de veces que se repite