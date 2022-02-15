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