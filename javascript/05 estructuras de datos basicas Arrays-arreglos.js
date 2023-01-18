//arreglo simple.
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
let variable = simpleArray[0]; //esto extrae el contenido dada la posicion del arreglo.
simpleArray[1]= "not b anymore"; //esto guarda en el arreglo en la pocision 1.
//**************************************
Array.push()//agrega los elementos al final del arreglo
Array.unshift() //agrega los elementos al inicio
Array.pop() //elimina un elemento al final de un arreglo NO SE LE PASA PARAMETRO
Array.shift() //elimina un elemento al principio. NO SE LE PASA PARAMETRO
Array.splice() //elimina y mete lo explico mas abajo. 
Array.slice() //copia o extrae lo explico mas abajo.
Array.indexOf()//nos permite comprobar rápida y fácilmente la presencia de un elemento en un arreglo, se explica mas abajo.
Array.indexOf()//útil para verificar rápidamente la presencia de un elemento en un arreglo.

////ejemplo
romanNumerals.unshift('XIX', 'XX');
romanNumerals.push(twentyThree);
//***********************
//ejemplo de una funcion que elimina el primer y ultimo y los devuelve en un nuevo arreglo.
function popShift(arr) {
  let popped=arr.pop(); // Cambia esta línea
  let shifted=arr.shift(); // Cambia esta línea
  return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));
//*****************
Array.splice()//elimina cualquier número de elementos consecutivos y también devuelve un nuevo arreglo que contiene el valor de los elementos eliminados
//ejemplo
let array = ['I', 'am', 'feeling', 'really', 'happy'];
let newArray = array.splice(3, 2); 
//esto devuelve un nuevo arreglo que tiene el valor ['really', 'happy'].
//*************************************
//ejemplo de como .splice() elimina y agrega al mismo tiempo, recueda que el primer
function htmlColorNames(arr) {
  arr.splice(0,2, 'DarkSalmon','BlanchedAlmond' ) //aqui se le pasa tres parametros posicion, cantidad a eliminar despues de la posicion, parametros a agregar., 
  return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
//Esto devuelve: [ 'DarkSalmon','BlanchedAlmond','LavenderBlush','PaleTurquoise','FireBrick' ];
//*********************************************
array.slice() copia o extrae un número determinado de elementos a un nuevo arreglo, dejando intacto el arreglo al que se llama. slice() toma sólo 2 parámetros: el primero es el índice en el que se inicia la extracción, y el segundo es el índice en el que se detiene la extracción
//ejemplo
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3);
//todaysWeather tendrá el valor ['snow', 'sleet'], mientras que weatherConditions todavía tendrá ['rain', 'snow', 'sleet', 'hail', 'clear'].
//*******************************************
function forecast(arr) {
  return arr.slice(2,4);
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
//esto retorna: [ 'warm', 'sunny' ]
*************************************************
//copiar un arreglo de esta manera:
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
********************************************
//funcion que mete en un arreglo multiples copia de un arreglo.
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Cambia solo el código debajo de esta línea
    newArr.push([...arr]);
    // Cambia solo el código encima de esta línea
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));
/*****************************************************/
//podemos concatenar arreglos, pero esto sólo nos permite combinar arreglos al final de uno, y al principio de otro. La sintaxis de propagación hace la siguiente operación extremadamente simple:
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
thatArray tendrá el valor ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].
//Usando la sintaxis de propagación, acabamos de lograr una operación que habría sido más compleja y verbosa si hubiéramos usado métodos tradicionales.
//EjemploVVVV
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // Cambia esta línea
  return sentence;
}
console.log(spreadOut());
/*********************************************/
.indexOf()//nos permite comprobar rápida y fácilmente la presencia de un elemento en un arreglo
indexOf() //toma un elemento como parámetro, y cuando lo llama, devuelve la posición, o índice, de ese elemento,
// o -1 si el elemento no existe en el arreglo.
//ejemplo:VVV
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');
//indexOf('dates') devuelve -1, indexOf('oranges') devuelve 2, e indexOf('pears') devuelve 1 (el primer índice en el que existe cada elemento).
indexOf()// puede ser increíblemente útil para verificar rápidamente la presencia de un elemento en un arreglo.
//funcion de ejemplo que comprueba si existe un elemento en un arreglo, se usa el indexOf().
function quickCheck(arr, elem) {
  // Cambia solo el código debajo de esta línea
   if(arr.indexOf(elem)!=-1){
     return true;
   }
   else return false;
  // Cambia solo el código encima de esta línea
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
//esto devuelve true o false.
//*********************************************/
//funcion que 
function filteredArray(arr, elem) {
  let newArr = [];
  // Cambia solo el código debajo de esta línea
    for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem)<0) {
      newArr.push(arr[i]);
    }
  }
  // Cambia solo el código encima de esta línea
  return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
//devuelve una versión filtrada del arreglo pasado de forma que cualquier arreglo anidado dentro de arr que contenga elem haya sido eliminado

