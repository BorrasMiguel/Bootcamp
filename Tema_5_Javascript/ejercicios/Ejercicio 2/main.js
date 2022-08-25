// Aparatado 1. Define e inicializa un array con 5 elementos string en una sola línea
const array1 = ["negro", "blanco", "azul", "chocolate"];
console.log(array1);

// Aparatado 2. Define un array inicialmente vacío. Añade tres elementos de tipo number posteriormente. Elimina por
// completo el primero y añade dos nuevos números al inicio. En cada paso, imprime la longitud y el array
// entero por consola utilizando un string template del tipo: `Longitud: ${}`.

const array2 = [];

array2.push(4);
array2.push(10);
array2.push(20);
console.log(`Longitud: ${array2.length}`);

array2.shift();
console.log(`Longitud: ${array2.length}`);

array2.unshift(2);
array2.unshift(20);
console.log(`Longitud: ${array2.length}`);

// Aparatado 3. Escribe una función nombrada que devuelva true si el argumento dado es de tipo boolean y false en
//caso contrario.

function myFunction(value) {
   return typeof value === "boolean";
};

console.log(myFunction(true));
console.log(myFunction(2));
console.log(myFunction("true"));

// Apartado 4 Escribe una función que devuelva la longitud de un string recibido por argumento.

const lengthString = string => string.length;

console.log(lengthString("Escribe una función que devuelva la longitud de un string recibido por argumento."));
console.log(lengthString("Hola Mundo"));

// Apartado 5. Crea una función de flecha que reciba una cantidad de minutos y lo devuelva convertido en segundos. 

const transfornTime = mins => mins*60;

console.log(transfornTime(15));
console.log(transfornTime(60));

// Apartado 6. Crea una función que reciba un número y devuelva el siguiente número par. (Si él es par, lo devolverá
//directamente).

function par(num) {
   if (num % 2 == 0) {
      return num;
   } else {
      return num + 1;
   }
}

console.log(par(5));
console.log(par(8));

// Apartado 7. Crea una función que reciba una edad y devuelva la cantidad de días que esa persona ha vivido. Puedes
//obviar los años bisiestos.

function vida(años) {
   return años * 365;
}

console.log(vida(60));
console.log(vida(1));

// Aparatdo 8.  Crea una función que reciba un array y devuelva su último elemento. Prueba tu función con varios arrays
//de diferentes longitudes.

const returnLastElement = array => array[array.length - 1];

console.log(returnLastElement(array1));

// Apartado 9. Un granjero necesita contar la cantidad de patas de los animales en sus diferentes granjas muy
//frecuentemente, pero tiene tres especies: pollos (2 patas), vacas (4 patas) y cerdos (4 patas). Tu función
//recibirá la cantidad de animales en ese orden y devolverá la cantidad de patas totales. Ejemplo: countLegs(5, 2, 8); // output: 50.

const countLegs = (pollos, vacas, cerdos) => pollos * 2 + vacas * 4 + cerdos * 4;
console.log(countLegs(5, 2, 8));

// Apartado 10. Crea una función que determine si dos datos recibidos por argumentos son del mismo tipo

const typeData = (data1, data2) => typeof data1 === typeof data2 ? "son del mismo tipo" : "son de distinto tipo";

console.log(typeData(true, "Hola"));

// Apartado 11. Crea una función que reciba un string con una frase y devuelva un array donde cada elemento será una
// palabra de la frase original. Investigar método existente de los strings para este fin.

let string11 = "La mañana se nos echa encima";

function returnString (x) {
   return x.split(" ");
}

// Aparatado 12.  Inicializa dos objetos, address1 y address2 con las propiedades: provincia, ciudad, municipio, código
//postal, calle, número, planta, y número de puerta

const address1 = {
   provincia: "Jaén",
   ciudad: "Linares",
   municipio: " La Carolina",
   código: "23700",
   calle: "Del Campo",
   número: "36",
   planta: "tercera",
   numeroPuerta: "2º"
}

// Aparatdo 13. Los dominios en la web, se componen del nombre de dominio (codespaceacademy) y de un TLD (toplevel domain) como, por ejemplo .com / .es / .org, etc. Crea una función que se llame parseDomain() que
// reciba por argumento un string y devuelva un objeto con dos propiedades: domain y tld. Ejemplo:

const parseDomain = function(url) {
   const array13 = url.split(".");
   return {
      domain: array13[0],
      tld: array13[1]
   }
   return object;
}
console.log(parseDomain("codespace.com"));
console.log(parseDomain("google.com"));
console.log(parseDomain("animals.org"));

// Apartado 14. Nos han prohibido el uso del operador de igualdad estricta (===), pero queremos poder seguir utilizando
// dicha esa funcionalidad. Crea una función que devuelva true si dos números tienen el mismo valor y el
// mismo tipo de dato. Debemos usar el operador lógico “&&”. Prueba tu función con dos estos inputs:
//strictEquality("5", 5); // false
//strictEquality(5, 5); // true

const strictEquality = (num1, num2) => num1 == num2 && typeof num1 == typeof num2;
console.log(strictEquality("5", 5));
console.log(strictEquality(5, 5));

// Apartado 15. Crea una función que reciba dos strings y devuelva true si tienen la misma longitud y false en caso
// contrario.

const lengthString15 = (str1, str2) => str1.length === str2.length;

console.log(lengthString15("Hola mundo", "Hola mundo"));
console.log(lengthString15("Hola mundo", "Adios mundo"));

// Apartado 16. Crea una función que reciba un string y determine si está vacío sin utilizar la propiedad length.

// const str16 = str => str === "" || str === undefined ? "el String está vacio" : "El String esta lleno";
const str16 = str => str ? false : true; //falsy values

console.log(str16(""));
console.log(str16());
console.log(str16("Algo"));

// Apartado 17. . Imprimir elemento a elemento el array del apartado 1 de cuatro formas diferentes:
//• while
//• for
//• for of
//• forEach.

let e = 0;
while (e < array1.length) {
   console.log(array1[e]);
   e++;
};

for (let e = 0; e < array1.length; e++) {
   console.log(array1[e]);
   
};

array1.forEach((value, index) => console.log(`Indice: ${index}: ${value}`));

for(let xxx of array1) {
   console.log(xxx);
}

// Aparatado 18.  Crea una función que reciba un string y un número N y devuelva el string original repetido N veces

const repeatString = (string, n) => console.log(string.repeat(n));
repeatString("CodeSpace esta muy bien", 5);

// Apartado 19. . Crea una función que recibe un objeto con dos campos, votos positivos y votos negativos y que devuelva
// la cuenta final.

const getVoteCount = function (obj) {
   return obj.upVotes - obj.downVotes;
}

const votes = {
   upVotes: 35,
   downVotes: 15
}
console.log(getVoteCount(votes));

// Aparatado 20. Crea una función que recibe un array de tipos de datos mezclados y que devuelva otro array con el tipo
// de cada uno de los elementos.

const typeOfArray = function (array) {
   const arrayTypes = [];
   array.forEach(element => {
      arrayTypes.push(typeof element);
   });

   return arrayTypes;
}

const arrayTest20 = ["Hola Mundo", 7.5, {}, undefined, [], "codespace"];
console.log(typeOfArray(arrayTest20));

// Apartado 21. Función que dado un array de números con formato string devuelva un array con los números ya
// parseados.

function getParsedNumbers(array) {
   const parsedArray = [];

   array.forEach(element => {
      parsedArray.push(Number(element));
   });

   return parsedArray; 
}

console.log(getParsedNumbers(["5", "1.5", "45"]));

// Apartado 22. Crea una función de flecha que devuelva “Positivo” si el número que recibe por argumento es mayor o
// igual que cero y “Negativo” en caso contrario. Usa el operador ternario.

const isPositive = num => num >= 0 ? "Positivo" : "Negativo";
console.log(isPositive(5));
console.log(isPositive(-2));
console.log(isPositive(0));


// Apartado 23. Crea una función que dado un array cualquiera y un índice, borre el elemento guardado en ese índice.

const removeElement = (array, index) => array.splice(index, 1);

// Apartado 24. Filtrar numeros.
const filterItem = (array, numberToFilter) => {

   array.forEach((element, index) => {
      
      if (element === numberToFilter) {
         removeElement(array, index);
      }

   });
}

const arrayToFilter = [1, 5, 5, 7, 3, 2, 8, 9];
filterItem(arrayToFilter, 5);
console.log(arrayToFilter);

// Apartado 25.  Crea dos funciones que recibirán un objeto, la primera devolverá un array con los nombres de todas sus
// propiedades. La segunda devolverá un array con los valores de dichas propiedades.
// Investigar los métodos keys y values del prototipo de Object.

const propertyObject = function (obj) {
   return Object.keys(obj);
}

let clase = {
   profesor: "Jesus",
   alumno:"Miguel",
   clase: "Malaga"
}

console.log(propertyObject(clase));

const valueObject = function (obj) {
   return Object.values(obj);
}
console.log(valueObject(clase));

// Aparatdo 26. Crea una función que invierta un string

function reverseString (str) {
   return str.split("").reverse().join("");  //Split transforma string en un array separando cada caracter, el metodo reverse es una propiedad del array y le da la vuelta, el metodo join los vuelve a unir.
}

console.log(reverseString("Hola Buneas Noches aquie estamos presentes"));

// Apartado 26 A. 

const reverseString2 = function (string) {
   let stringReverse = "";
   for (let i = string.length - 1; i >= 0; i--) {
      stringReverse += string.charAt(i);
   }

   return reverseString2;
}

console.log(reverseString2("Hola Buneas Noches aquie estamos presentes"));

// Aparatado 27 Crea una función que compare strings sin tener en cuenta las mayúsculas / minúsculas.