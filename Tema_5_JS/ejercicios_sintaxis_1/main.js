//  Define e inicializa un array con 5 elementos string en una sola línea.

const array1 = ["negro", "blanco", "rojo", "marron"];
console.log(array1);

// Define un array inicialmente vacío. Añade tres elementos de tipo number posteriormente. Elimina por
// completo el primero y añade dos nuevos números al inicio. En cada paso, imprime la longitud y el array
//entero por consola utilizando un string template del tipo: `Longitud: ${}`.

const array2 = [];

array2.push(4, 5, 7);
console.log(`Longitud: ${array2}`);

array2.shift();
console.log(`Longitud: ${array2}`);

array2.unshift(8, 10);
console.log(`Longitud: ${array2}`);

// Escribe una función nombrada que devuelva true si el argumento dado es de tipo boolean y false en
// caso contrario. 

function comprobar(type) {
    return typeof type === "boolean";
}

console.log(comprobar(true));
console.log(comprobar(2));
console.log(comprobar("true"));

// Escribe una función que devuelva la longitud de un string recibido por argumento.

function longitud(item) {
    return item.length;
}
console.log(longitud("Hola mundo"));

// Crea una función que reciba un número y devuelva el siguiente número par. (Si él es par, lo devolverá
// directamente).

function changeToPar(number) {
    if (number % 2 === 0) {
        return number;
    } else {
        return number + 1;
    }
}

console.log(changeToPar(3));
console.log(changeToPar(6));

// Crea una función de flecha que reciba una cantidad de minutos y lo devuelva convertido en segundos.

const minToSeg = min => min*60;

console.log(minToSeg(60));

// Crea una función que reciba una edad y devuelva la cantidad de días que esa persona ha vivido. Puedes
// obviar los años bisiestos.

const yearsToDays = years => years*360;

console.log(yearsToDays(50));

// Crea una función que reciba un array y devuelva su último elemento. Prueba tu función con varios arrays
// de diferentes longitudes.

function lastNumber(array) {
    return array.slice(-1);
}

const returnLastElement = array => array[array.length - 1]; //Alternativa

console.log(lastNumber(array1));
console.log(returnLastElement(array1));

//Un granjero necesita contar la cantidad de patas de los animales en sus diferentes granjas muy
//frecuentemente, pero tiene tres especies: pollos (2 patas), vacas (4 patas) y cerdos (4 patas). Tu función
//recibirá la cantidad de animales en ese orden y devolverá la cantidad de patas totales. Ejemplo: countLegs(5, 2, 8); // output: 50.

const numberLegs = (pollos, vacas, cerdos) => pollos*2 + vacas*4 + cerdos*4;

console.log(numberLegs(4, 5, 3));

// Apartado 10. Crea una función que determine si dos datos recibidos por argumentos son del mismo tipo


function dataType(data1, data2) {
    if (typeof data1 === typeof data2) {
        return console.log("Son del mismo tipo");
    } else {
        return console.log("Los datos introducidos son de distinto tipo");
    };
}

dataType("Hola", 5);
dataType(4, 2);

const typeData = (data1, data2) => typeof data1 === typeof data2 ? "son del mismo tipo" : "son de distinto tipo"; //Alternativa

// Apartado 11. Crea una función que reciba un string con una frase y devuelva un array donde cada elemento será una
// palabra de la frase original. Investigar método existente de los strings para este fin.

function stringToArray(str) {
    let arrayStr = str.split(" ");
    return console.log(arrayStr);
}

stringToArray("Esto es una prueba del ejercicio para codeSpace");

// Aparatdo 13. Los dominios en la web, se componen del nombre de dominio (codespaceacademy) y de un TLD (toplevel domain) como, por ejemplo .com / .es / .org, etc. Crea una función que se llame parseDomain() que
// reciba por argumento un string y devuelva un objeto con dos propiedades: domain y tld. Ejemplo:

function domain(url) {
    let arrayDomain = url.split(".");
    return {
        domain: arrayDomain[0],
        dtl: arrayDomain[1]
    }
    return Object
}

console.log(domain("codespace.com"));

// Apartado 14. Nos han prohibido el uso del operador de igualdad estricta (===), pero queremos poder seguir utilizando
// dicha esa funcionalidad. Crea una función que devuelva true si dos números tienen el mismo valor y el
// mismo tipo de dato. Debemos usar el operador lógico “&&”. Prueba tu función con dos estos inputs:
//strictEquality("5", 5); // false
//strictEquality(5, 5); // true


function strictEquality(item1, item2) {
    if (item1 == item2 && typeof item1 == typeof item2) {
        return true;
    } else {
        return false;
    }
}

console.log(strictEquality(5, 5));
console.log(strictEquality(5, "cinco"));
console.log(strictEquality(5, "5"));


// Apartado 15. Crea una función que reciba dos strings y devuelva true si tienen la misma longitud y false en caso
// contrario.

function lengthStr(str1, str2) {
    if (str1.length === str2.length) {
        return true;
    } else {
        return false;
    }
}

console.log(lengthStr("Hola caracola", "Hola caracola"));
console.log(lengthStr("Hola caracola", "Hola caracola grande"));

// Apartado 16. Crea una función que reciba un string y determine si está vacío sin utilizar la propiedad length.

function emptyStr(str) {
    return str === "" || str === undefined;
}

console.log(emptyStr(""));
console.log(emptyStr("Hola"));

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

for (let index = 0; index < array1.length; index++) {
    console.log(array1[index]);
}

array1.forEach((value, index) => console.log(`Indice: ${index}, Valor: ${value}.`));

for (const xxx of array1) {
    console.log(xxx);
}

// Aparatado 18.  Crea una función que reciba un string y un número N y devuelva el string original repetido N veces

function repStr(str, n) {
    return console.log(str.repeat(n));
}

repStr("Hola", 5);

// Apartado 19. . Crea una función que recibe un objeto con dos campos, votos positivos y votos negativos y que devuelva
// la cuenta final.

const elecciones = {
    votosPositivos: 30,
    votosNegativos: 20
}

function votesNumber(object) {
    return elecciones.votosPositivos - elecciones.votosNegativos;
}

console.log(votesNumber(elecciones));

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

const positiveOrNegative = num => num >= 0 ? "Positive" : "Negative";

console.log(positiveOrNegative(5));
console.log(positiveOrNegative(-1));

// Apartado 23. Crea una función que dado un array cualquiera y un índice, 
// borre el elemento guardado en ese índice.

function removeElements(array, index) {
    array.splice(index, 1);
    return console.log(array);;
}

const array23 = ["perro", "gato", "oveja"];

removeElements(array23, 1);

// Apartado 24. Filtrar numeros. Elimina los numeros que les indiques.

const filterItem = (array, numberToFilter) => {

    array.forEach((element, index) => {
       
       if (element === numberToFilter) {
          removeElements(array, index);
       }
    });
 }
 
 const arrayToFilter = [1, 5, 5, 7, 3, 2, 8, 9];
 filterItem(arrayToFilter, 5);
 console.log(arrayToFilter)

// Apartado 25.  Crea dos funciones que recibirán un objeto, la primera devolverá un array con los nombres de todas sus
// propiedades. La segunda devolverá un array con los valores de dichas propiedades.
// Investigar los métodos keys y values del prototipo de Object.

const object25 = {
    altura: 1.95,
    peso: 55,
    rubio: "si"
}

function valueObject(obj) {
    return Object.values(obj);
}

function propertyObject(obj) {
    return Object.keys(obj)
}

console.log(valueObject(object25));
console.log(propertyObject(object25));

// Aparatdo 26. Crea una función que invierta un string

function reverseString (str) {
    return str.split("").reverse().join("");  //Split transforma string en un array separando cada caracter, el metodo reverse es una propiedad del array y le da la vuelta, el metodo join los vuelve a unir.
 }
 
 console.log(reverseString("Hola Buneas Noches aqui estamos presentes"));

 // Aparatado 27 Crea una función que compare strings sin tener en cuenta las mayúsculas / minúsculas.

const comparation = (str1, str2) => str1.toLowerCase() == str2.toLowerCase() && str1.toUpperCase() == str2.toUpperCase();

console.log(comparation("Hola Mundo", "Adiós Mundo"));
console.log(comparation("Hola Mundo", "hola mundo"));
console.log(comparation("HOLA MUNDO", "hola mundo"));

// Apartado 28. Crea una función que convierta en mayúscula sólo la primera letra de cada palabra de un string dado. El
// apartado 11 será de ayuda. Investigar cómo unir un array de strings en un único string.

const propertyFirtsToUpperCase = function (string) {
    const words = string.split(" ");
 
    for (let i = 0; i < words.length; i++) {
       words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
 
    return words.join(" ");
 
 };
 
 console.log(propertyFirtsToUpperCase("buenos dias desde linares"));
 
 // Apartado 29. Crea una función en una única línea que reciba un valor lógico y devuelva el opuesto.
 
 const negate = logical => !logical;
 console.log(negate(true));
 console.log(negate(false));
 
 



