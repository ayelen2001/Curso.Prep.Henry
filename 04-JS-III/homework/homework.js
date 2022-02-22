// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array [0];
  }


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var ultimoelemento = array.length-1 ;
  return array [ultimoelemento];
  }

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  //var cantidad = array.length;
  //return cantidad;
  return array.length;  
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var nuevoArray = []; //la bolsa
  for (let i = 0; i < array.length; i++) {
  nuevoArray [i] = array [i]+1;  
  }
  return nuevoArray;  
  }

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
 //array [array.length] = elemento;
 //return array;
 array.push (elemento);
 return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
   array.unshift (elemento);
   return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ");
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    if (array [i] === elemento){
      return true;
    }
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0
  for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros [i];
  }
   return suma; 
  }


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  // var acum = 0;
  // for(var i=0; i<resultadosTest.length;i++){
  // acum = acum + resultadosTest[i];
  // }
  // var prom = acum / i;
  // return prom;
  // }

  var totalDeElementos = resultadosTest.length;
  var suma = 0
  for (var i = 0; i < resultadosTest.length; i++) {
    suma = suma + resultadosTest [i]
  }
    var promedio = suma / totalDeElementos;
  return promedio
  }


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mayor = numeros [0];
  for (let i = 0; i < numeros.length; i++){
  if(numeros[i] >mayor){
  mayor = numeros [i];
  }
  }
  return mayor;
  }
// empiezo a preguntar, si lo que tiene numeros sub i es > a mayor,
// luego voy a decir que a > mayor = numeros en la posicion [i],
// que a mayor le asigne lo que encontro como mayor ahora que es numeros sub i
// cuando salga del for lo que va tener es el mayor encontrado.


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length === 0){        // const product2 = multiplicarArgumentos();
    return 0;
  }
  if (arguments.length === 1){          //  const product4 = multiplicarArgumentos(1);
  return 1;
  }
  var m = 1;
  for (let i = 0; i < arguments.length; i++) {
  m = m*arguments[i];
  }
  return m; 
  }


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cant = 0;
  for (let i = 0; i < arreglo.length; i++) {
  if (arreglo [i]  > 18){
  cant++; 
  }
  }
  return cant;
  }


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7){
  return "Es fin de semana";   
  } else {
    return "Es dia Laboral";
  }
  } 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var cadena = n.toString()
  if(cadena[0]==="9"){                  // convierte el caracter 9 y lo trae a string en posicion [0]
  return true;                          // empiezaConNueve(98)   true
  }                                     // empiezaConNueve (145) no - saltea true y devuelve false
  return false;
  }

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (let i = 0; i < arreglo.length-1; i++){
  if (arreglo [i] !== arreglo [i + 1]){
  return false;
  }
  }
  return true;
  } 

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArreglo = [];
  for (let i = 0; i < array.length; i++) {
  if (array [i] === "Enero" || array [i] === "Marzo" ||array [i] === "Noviembre"){
  nuevoArreglo.push(array [i]);
  }
  }
  if(nuevoArreglo.length ===3){
  return nuevoArreglo;
  }
  return "No se encontraron los meses pedidos";
  }

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
 var mayores100 =[];
 for (let i = 0; i < array.length; i++) {
  if (array[i] > 100){
  mayores100.push(array[i]);
  }
  }
  return mayores100; 
  }


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var arreglo = [];
  var vueltas = 0;
  for (let i = 0; i < 10 ; i++) {
  numero = numero + 2;
  arreglo.push(numero)
  vueltas = vueltas +1;
  if(vueltas === numero){           // frena porque valor de suma y el numero de iteraciones coinciden ( === )
    break;
  }
  }
  if (vueltas < 10) {
  return "Se interrumpió la ejecución";
  }
  return arreglo;
  }
  
  


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  // expect(continueStatement(50)).toEqual(        [52, 54, 56, 58, 60, 62, 64, 66, 68]); 9 veces
  // expect(continueStatement(-4)).toEqual(      [-2, 0, 2, 4, 6, 8, 10, 12, 14]); 9 veces
  var arreglo = [];
  for (let i  = 0; i <10 ; i ++) {
  if (i === 5 ){
    continue;
  }
    numero = numero + 2;
    arreglo.push(numero)
  }
  return arreglo;
  }



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
