//Uso de JS externo--------------------------------------------------------------


// function saludo() {
//     alert("Hola desde un script externo");
//     console.log("has hecho click");
// }
// document.getElementsByTagName("a").item(2).addEvenListener("click", saludo);


// //Depuracion / Logging
// // alert("Mensaje");
// console.log("Mensaje");



//Variables----------------------------------------------------------------
//var -> fuction scope
//let / const -> block scope

function saludar() {
    let contador;
    console.log("Inicial: ", contador);
    for (let contador= 0; contador < 3; contador++) {
        console.log(contador);
    }
    console.log("Final: ", contador);
}

saludar();

console.clear();


//Inicializacion-------------------------------------------------------
let day;
day = 5;

let monthName = "Octubre";

let hour, minute, second;

let array = [15, 20, 25];
console.log(array[0], array[1], array[2]);

let [var1, var2, var3] = [15, 20, 25]; //Avanzada
console.log(var1, var2, var3);

//const -> block scope
const x = 1;
//const y; // Error: missing = in const
//x = 2; //Error: invalid assigment to const `x`


//Tipos de datos-----------------------------------------------------
//--------------------------Datos Primitivos
let str = String("I'm a string");
let str2 = "I'm another string"; //Recomendado
console.log(typeof str, typeof str2);

let num = Number(5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 5, typeof "5")

let bool = Boolean(true);
let bool2 = false;
console.log(typeof bool, typeof bool2, typeof true, typeof "true");

let undef;
console.log(undef, typeof undef);

let selectedColor = null; //Limpiar la variable
console.log(selectedColor, typeof selectedColor);


//------------------------------Objects
array = Array(1, 2, 3);
let array2 = [1, 2, 3];
console.log(array, array2);
console.log(typeof array, typeof array2);

console.log(typeof new Date("2021:05:12"));
console.log(typeof new Error("Mensaje de error"));

console.clear();
//------------------------------Strigns
str = "Hola futuro";
console.log(str, str.length);
console.log(str.indexOf("futuro"), str.indexOf("cadena no presente"));
console.log("La última ocurrencia de 'u' está en el indice", str.lastIndexOf("u"));

console.log(str.substring(1, 3));

console.log("Hola mundo".concat(". Adios mundo"));
console.log("Hola mundo"+ ". Adios mundo");//Equivalente a concat
str = str + ". Adios mundo";
str += ". Adios mundo";
console.log(str);

console.log(str.replace("futuro", "mundo"));
console.log(str.replaceAll("futuro", "mundo"));
console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(`El día de mi cumpleaños es ${day}`);
console.log("El dia de mi cumpleaños es", day, ".");

//Parsing conversion de un tipo a otro
let number = Number("asdasd"); //NaN = Not a number. No genera error.
console.log(number, typeof number);

number = Number("1000"); 
console.log(number, typeof number);

number += "1000";  //Entiende que es una concatenacion, no una suma.
console.log(number, typeof number);

console.log("1" +1, "1" - 1);

//-----------------------------Objects

const person = { 
    name: "Jonh",
    age: 30,
    blonde: false,
    jump() {
        console.log("Hey, estoy saltando");
    }
}


//Acceso por punto
console.log(typeof person, person);
console.log(`Se llama ${person.name} y tiene ${person.age} años.`);

person.name = "Jane";

console.log(person);
console.log(`Se llama ${person.name} y tiene ${person.age} años.`);


//Acceso por corchetes
let propertyName = "age"
console.log(person[propertyName]);

//Ampliacion Introducir propiedades a objetos ya existentes
person.children = ["Martha", "Perter"];
console.log(person);
console.log(person.children[1]);

person.jump();



