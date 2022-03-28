// 1).-

// cnt1 = N° de vocales en la string.
// cnt2 = N° de consonantes que tienen valor PAR.
// cnt2 = N° de consonantes que tienen valor IMPAR.
// 0 es un valor posible.
// Calculate = cnt1 * cnt2 * cnt3
/* let s_array: string = 'abc'; */
let cnt1: number = 0;
let cnt2: number = 0;
let cnt3: number = 0;
function productFromString(s_array:string[]): number {
	 //Insert your code here 
  let abecedario
//   : {
//   a:number; b: number; c:number; d:number; e:number; f:number; g:number; h:number; i:number; j:number; 	 k:number; l:number; m:number; n:number; o:number; p:number; q:number; r:number; s:number; t:number;     u:number; v:number; w:number; x:number; y:number; z:number;
// }
 = {
  a: 1, b: 2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10, k:11, l:12, m:13, n:14, o:15, 
  p:16, q:17, r:18, s:19, t:20, u:21, v:22, w:23, x:24, y:25, z:26
}
let cnt1: number = 0;
let cnt2: number = 0;
let cnt3: number = 0;
//s_array = s_array.split('')
//console.log(s_array)
for(let l: number = 0; l < s_array.length; l++) {
  //console.log(s_array[l])
  if (s_array[l] == "a" || 
      s_array[l] == "e" ||
      s_array[l] == "i" ||
      s_array[l] == "o" ||
      s_array[l] == "u"   ) {
		cnt1 += 1;
  } else {
  for (const letter in abecedario) {
    //console.log(letter)
  	 if (s_array[l] == letter && abecedario[letter] % 2 === 0) cnt2 += 1;
    else if (s_array[l] == letter && abecedario[letter] % 2 !== 0) cnt3 += 1
 }
}
}
  let calculoTotal:number = cnt1 * cnt2 * cnt3;
  return calculoTotal
	// console.log(cnt1)
	// console.log(cnt2)
	// console.log(cnt3)
}
// let s_array:string[] = ['a','b','c','d','e','f','g','h'];
// productFromString(s_array) 
